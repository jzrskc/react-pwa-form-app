import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import FormView from './container/FormView';
import HomeView from './container/HomeView';
import './assets/css/index.css';

import * as serviceWorker from './serviceWorker';


const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={HomeView} />
      <Route exact path="/form" component={FormView} />
    </BrowserRouter>
  );
};


ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
