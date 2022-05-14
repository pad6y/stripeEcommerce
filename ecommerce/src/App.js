import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/home-page';
import Shop from './pages/shop/shop';
import SingleProductPage from './pages/shop/single-product-page';
import CartPage from './pages/cart/cart-page';
import Checkout from './components/checkout/checkout';
import Success from './components/checkout/stripe-checkout/success';
import Cancelled from './components/checkout/stripe-checkout/cancelled';
import SignUp from './components/sign-up/sign-up';
import SignIn from './components/sign-in/sign-in';
import NotFound from './pages/not-found';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/shop" component={Shop} />
        <Route path="/product/:productId" component={SingleProductPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/success" component={Success} />
        <Route path="/cancelled" component={Cancelled} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
