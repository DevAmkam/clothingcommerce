import './App.css';
import { Switch, Route } from 'react-router-dom'

import Homepage from './pages/homepage/Homepage'
import Shop from './pages/shop/Shop'
import Header from './components//header/Header'
import SignInAndSignup from './pages/sign-in-and-signup/SignInAndSignup'


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/signin" component={SignInAndSignup} />
     </Switch>
    </div>
  );
}

export default App;
