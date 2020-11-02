import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css";
import CustomLayout from './containers/Layout';
import TransactionListView from './containers/TransactionListView';

function App() {
  return (
    <div className="App">
        <CustomLayout>
            <TransactionListView />
        </CustomLayout>
    </div>
  );
}

export default App;
