import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import FormView from './container/FormView';
import HomeView from './container/HomeView';
import './assets/css/index.css';

import * as serviceWorker from './serviceWorker';


const App = () => {
  const [newVersionAvailable, setNewVersionAvailable] = React.useState(false);
  const [waitingWorker, setWaitingWorker] = React.useState(null);


  const onSWUpdate = (registration) => {
    setNewVersionAvailable(true);
    setWaitingWorker(registration.waiting);
  };

  React.useEffect(() => {
    serviceWorker.register({ onUpdate: onSWUpdate });
  }, []);

  const reloadPage = () => {
    waitingWorker && waitingWorker.postMessage({ type: 'SKIP_WAITING' });
    setNewVersionAvailable(false);
    window.location.reload(true);
  };

  return (
    <BrowserRouter>
      {newVersionAvailable && <button onClick={reloadPage} className="uploadBtn">Reload</button>}

      <Route exact path="/" component={HomeView} />
      <Route exact path="/form" component={FormView} />
    </BrowserRouter>
  );
};


ReactDOM.render(<App />, document.getElementById('root'));
// serviceWorker.register();
