import React, {useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';
import Manager from './containers/Manager/Manager';
import GoViral from './components/GoViral/GoViral';

library.add(fab);

function App() {
  useEffect(() => {
    ReactGA.initialize('UA-165126959-1');

    // to report pageviews
    ReactGA.pageview('/');
  }, [])

  const advancedMatching = {
    em: '{user-email}'
  }

  const options = {
    autoConfig: true,
    debug: false
  };

  ReactPixel.init('3158786037514457', advancedMatching, options);
  ReactPixel.pageView();
  // ReactPixel.track('Start Shopping', data);

  return (
    <React.Fragment>
      <Route path="/publish-tweet" exact component={GoViral} />
      <Route path="/" exact component={Manager} />
    </React.Fragment>
  );
}

export default App;
