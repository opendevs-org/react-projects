import { Layout, Menu } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { STORAGE_KEY_SYMBOLS } from "./constants";
import { LatestPrices } from "./pages/latest-prices";
import { Settings } from "./pages/settings";
import { updateSymbols } from "./redux/actions/app";

function App() {
  const [selectedPage, setSelectedPage] = useState<'latest-prices' | 'settings'>('latest-prices')
  const dispatch = useDispatch()

  useEffect(() => {
    const symbolsFromLS = localStorage.getItem(STORAGE_KEY_SYMBOLS)
    if (symbolsFromLS) {
      dispatch(updateSymbols(JSON.parse(symbolsFromLS)))
    }
  }, [])

  return (
    <Layout>
      <Layout.Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['latest-prices']}
          items={[
            {
              key: 'latest-prices',
              label: 'Latest prices'
            },
            {
              key: 'settings',
              label: 'Settings'
            },
          ]}
          onClick={(value) => setSelectedPage(value.key as 'latest-prices' | 'settings')}
        />
      </Layout.Header>
      <Layout.Content style={{ padding: '0 50px' }}>
        {selectedPage === 'latest-prices' && <LatestPrices />}
        {selectedPage === 'settings' && <Settings />}
      </Layout.Content>
    </Layout>
  );
}

export { App };
