import { Select, Typography } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { ALLOWED_SYMBOLS } from "../constants"
import { updateSymbols } from "../redux/actions/app"
import { RootState } from "../redux/store"

const Settings = () => {
  const symbols = useSelector((state: RootState) => state.app.symbols)
  const dispatch = useDispatch()

  return (
    <>
      <Typography.Title>Settings</Typography.Title>
      <Typography.Text>Select all the symbols that you wish to track the price for.</Typography.Text>
      <div>
        <Select
          mode="multiple"
          allowClear
          style={{ width: '300px' }}
          placeholder="Please select"
          value={symbols}
          options={ALLOWED_SYMBOLS.map(symbol => ({
            label: symbol,
            value: symbol
          }))}
          onChange={(value) => {
            dispatch(updateSymbols(value))
          }}
        />
      </div>
    </>
  )
}

export { Settings }
