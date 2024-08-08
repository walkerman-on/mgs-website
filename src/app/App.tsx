import React from 'react';
import AppRouter from './providers/router/ui/AppRouter';
import { routeConfig } from './providers/router/config/RouterConfig';
import { Navigation } from 'widgets/navigation';
import "app/styles/index.scss";
import { Header } from 'widgets/header';

export const App = () => {
  return (
    <div className="app">
      <Header />
      {/* <Navigation /> */}
      {AppRouter(routeConfig)}
    </div>
  );
}

