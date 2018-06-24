import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

// skip the dishes
const RestaurantsOverview = Loadable({
  loader: () => import('./views/Restaurants/Overview'),
  loading: Loading,
});

const CouriersOverview = Loadable({
  loader: () => import('./views/Couriers/Overview'),
  loading: Loading,
});

const SuppliersOverview = Loadable({
  loader: () => import('./views/Suppliers/Overview'),
  loading: Loading,
});

const Shopping = Loadable({
  loader: () => import('./views/Restaurants/Shopping'),
  loading: Loading,
});

const ShoppingCart = Loadable({
  loader: () => import('./views/Restaurants/Shopping/Cart'),
  loading: Loading,
});



// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  // skip the dishes
  { path: '/restaurants/overview', exact: true, name: 'Overview', component: RestaurantsOverview },
  { path: '/restaurants/shopping', exact: true, name: 'Shopping', component: Shopping },
  { path: '/restaurants/shopping/cart', exact: true, name: 'Shoppin Cart', component: ShoppingCart },
  { path: '/couriers/overview', exact: true, name: 'Overview', component: CouriersOverview },
  { path: '/suppliers/overview', exact: true, name: 'Overview', component: SuppliersOverview },
];

export default routes;
