import NotFoundPage from "components/NotFoundPage";
import PageOne from "pages/Page-1";
import PageTwo from "pages/Page-2";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Pager from "router/Pager";

const AppRouter = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route component={PageOne} path="/1" exact />
      <Route component={PageTwo} path="/2" exact />
      <Redirect exact from="/" to="/1" />
      <Route component={NotFoundPage} />
    </Switch>
    <Pager />
  </BrowserRouter>
);

export default AppRouter;
