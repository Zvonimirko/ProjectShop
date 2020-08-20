import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Homepage from './pages/homepage/homepage.component'
import Header from './components/header/header.component'
import ShopPage from './pages/shop/shop.component'
import SignInSignUp from './pages/signInSignUpPage/signInSignUp.component'

import './App.scss';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  render() {
      return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
