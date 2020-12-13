import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Checkout from '../containers/Checkout';
import Home from '../containers/Home';
import Information from '../containers/Information';
import NotFound from '../containers/NotFound';
import Payment from '../containers/Payment';
import SuccessPayment from '../containers/SuccessPayment';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/checkout/info" component={Information} />
      <Route exact path="/checkout/payment" component={Payment} />
      <Route exact path="/checkout/success" component={SuccessPayment} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
