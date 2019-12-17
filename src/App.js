import React, { Fragment } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import LoginPage from './pages/loginPage/LoginPage';
import ShopPage from './pages/shopPage/ShopPage';
import StoresPage from './pages/storesPage/StoresPage';
import Header from './components/header/Header';


function App() {
  return (
    <Fragment>
      <Header/>
      <Route exact path='/' component={HomePage}/>
      <Route
        path='/(.+)'
        render={() =>
          <Fragment>
            <div>
              <Route exact path='/login' component={LoginPage}/>
              <Route path='/shop' component={ShopPage}/>
              <Route path='/stores' component={StoresPage}/>
            </div>
          </Fragment>
        }
      />
    </Fragment>
  );
}

export default App;
