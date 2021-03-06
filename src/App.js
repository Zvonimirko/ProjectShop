import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Homepage from './pages/homepage/homepage.component'
import Header from './components/header/header.component'
import ShopPage from './pages/shop/shop.component'
import SignInSignUp from './pages/signInSignUpPage/signInSignUp.component'
import Checkout from './pages/checkout/checkout.component'

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import setCurrentUser from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors'

import './App.scss';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
      const { currentUser } = this.props
      return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInSignUp />)}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
