import DefaultLayout from 'components/layout/DefaultLayout';
import PrivateRoute from 'components/authGaurd/PrivateRoute';
import Checkout from 'pages/Checkout/Checkout';
import Login from 'pages/Login/Login';
import ProductDetails from 'pages/ProductDetails/ProductDetails';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home/Home'));
const Help = React.lazy(() => import('./pages/Help/Help'));
const Dashboard = React.lazy(() => import('./admin/layout/DefaultLayout'));

const AppRouter: React.FC = ({children}) => {
  return (
    <Router>
      <DefaultLayout>
       <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route path="/help" component={Help} />
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/checkout" component={Checkout} />
          <PrivateRoute path="/dashboard"  component={Dashboard} />
        </Suspense>
       </Switch>
      </DefaultLayout>
    </Router>
  );
};

export default AppRouter;
