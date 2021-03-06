import React, {Component} from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom'

import Homepage from './pages/homepage/Homepage'
import Shop from './pages/shop/Shop'
import Header from './components//header/Header'
import SignInAndSignup from './pages/sign-in-and-signup/SignInAndSignup'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })        
      } else {
        this.setState({ currentUser: userAuth })
      }
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }


  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={SignInAndSignup} />
       </Switch>
      </div>
    );
  }
}

export default App;
