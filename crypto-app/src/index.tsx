import ReactDOM from 'react-dom/client';
import 'antd/dist/reset.css';
import './index.css';
import { App } from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
