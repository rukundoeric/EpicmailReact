/* eslint-disable no-undef */
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Header from './layouts/header';
import HomeComponet from './pages/Home';
import ComposeComponent from './pages/Compose';
import DraftComponent from './pages/Draft';
import SentComponent from './pages/Sent';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={HomeComponet} />
      <Route exact path="/compose" component={ComposeComponent} />
      <Route exact path="/draft" component={DraftComponent} />
      <Route exact path="/sent" component={SentComponent} />
    </Switch>
  </BrowserRouter>
);

export default App;
