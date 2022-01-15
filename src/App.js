import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/Shop">
            <Shop></Shop>
          </Route>
          <Route path="/OrderReview">
            <OrderReview></OrderReview>
          </Route>
          <Router path="/Inventory">
            <Inventory></Inventory>
          </Router>
          <Router path="/placeOrder">
            <PlaceOrder></PlaceOrder>
          </Router>
          <Router path="*">
            <NotFound></NotFound>
          </Router>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
