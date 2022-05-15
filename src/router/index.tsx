import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { LoadingElement } from '@/components/loading';
import ScrollToTop from '@/components/ScrollToTop';
import Landing from '@/pages/user/landing';

import { routes } from './routes';

const RouterView = () => {
  return (
    <BrowserRouter basename="">
      <div className="hm-content">
        <Suspense fallback={LoadingElement}>
          <ScrollToTop>
            <Switch>
              <Route path="/landing" component={Landing} exact />
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  render={(props) => {
                    if (
                      localStorage.getItem('access_token') ||
                      route.path === '/privacy'
                    ) {
                      return <route.component {...props} />;
                    } else {
                      return <Redirect to="landing"></Redirect>;
                    }
                  }}
                  exact={route.exact}
                ></Route>
              ))}
              <Redirect from="/" to="/landing" exact></Redirect>
              <Redirect path="*" to="/index" />
            </Switch>
          </ScrollToTop>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};
export default RouterView;
