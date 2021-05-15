import Homepage from './pages/homepage.component';
import ShopPage from './pages/shop/shoppage.component';
import Header from './components/header/header.component';
import Checkout from './pages/checkout/checkout.component';
import SignInAndSignOut from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import React from 'react';
import { auth } from './components/firebase/firebase.utils';
import {createUserProfileDocument} from './components/firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './pages/redux/user/user.action';

class App extends React.Component {
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if(user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot(snapshot => {
          this.props.setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          })
        });
      }
      this.props.setCurrentUser(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact={true} path='/' component={Homepage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route exact={true} path='/checkout' component={Checkout}></Route>
          <Route exact={true} path='/signin' render={() => 
            this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignOut />)
          }></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
