import { Button, List, Statistic } from "antd"
import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"

type MessageData = {
  "type": "ticker" | "subscriptions",
  "product_id": string,
  "price": string,
  "side": "buy" | "sell",
}

type Prices = Record<string, {
  buy?: string
  sell?: string
}>

{
  a: {
    b: {
      c: 'd'
    }
  }
}

const x = a?.b?.c
const y = x ?? 'asbdc'

const LatestPrices = () => {
  const symbols = useSelector((state: RootState) => state.app.symbols)
  const connection = useRef<WebSocket>()
  const [prices, setPrices] = useState<Prices>({})

  const updatePrices = (symbol: string, side: 'buy' | 'sell', price: string) => {
    setPrices(prev => {
      const data = prev[symbol] || {}
      data[side] = price
      return { ...prev, [symbol]: data }
    })
  }

  const subscribe = () => {
    connection.current?.send(JSON.stringify({
      "type": "subscribe",
      "product_ids": symbols,
      "channels": ["ticker"]
    }))
  }

  const unsubscribe = () => {
    connection.current?.send(JSON.stringify({
      "type": "unsubscribe",
      "product_ids": symbols,
      "channels": ["ticker"]
    }))
  }

  const start = () => {
    connection.current = new WebSocket("wss://ws-feed.exchange.coinbase.com")
    connection.current.onopen = subscribe
    connection.current.onmessage = (e: MessageEvent<string>) => {
      const data = JSON.parse(e.data) as MessageData
      if (data.type === 'ticker') {
        updatePrices(data.product_id, data.side, data.price)
      }
    }
  }

  const stop = () => {
    unsubscribe()
    connection.current?.close()
    connection.current = undefined
  }

  useEffect(() => {
    return stop
  }, [])

  return (
    <>
      <List
        dataSource={symbols}
        renderItem={(symbol) => (
          <List.Item key={symbol}>
            <List.Item.Meta
              title={symbol}
            />
            <Statistic style={{ marginRight: '8px' }} title="Buy price" value={prices[symbol]?.buy ?? 'NA'} prefix="$" />
            <Statistic title="Sell price" value={prices[symbol]?.sell ?? 'NA'} prefix="$" />
          </List.Item>
        )}
      />
      <Button onClick={start} type="primary">Start</Button>
      <Button onClick={stop} type="primary">Stop</Button>
    </>
  )
}

export { LatestPrices }
