
import './App.css';
import CakeShopContainer from './components/HookCakeShopContainer';
import IceCreamContainer from './components/HookIceCreamContainer';
import UsersContainer from "./components/UsersContainer";
import {Provider} from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CakeShopContainer/>
      <IceCreamContainer/>
      <UsersContainer/>
    </div>
    </Provider>
  );
}

export default App;
