import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
// import { createBrowserHistory } from 'history';

import FormView from './container/FormView';
import HomeView from './container/HomeView';
import './index.css';

import * as serviceWorker from './serviceWorker';


const App = () => {
  // const history = createBrowserHistory();

  return (
    <BrowserRouter>
      <Route exact path="/" component={HomeView} />
      <Route exact path="/form" component={FormView} />
    </BrowserRouter>
  );
};


ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.register();
