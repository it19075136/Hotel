import { BrowserRouter, Route } from 'react-router-dom'
import register from './components/auth/register';
import signin from './components/auth/signin';
import about from './components/pages/about';
import facilities from './components/pages/facilities';
import gallery from './components/pages/gallery';
import Home from './components/pages/home';
import reachUs from './components/pages/reachUs';
import Head from './components/layouts/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Head />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={about} />
          <Route path='/gallery' component={gallery} />
          <Route path='/facilities' component={facilities} />
          <Route path='/reachUs' component={reachUs} />
          <Route path='/register' component={register} />
          <Route path='/signin' component={signin} />
          {/* <Route path='/addAbooking' component={} /> */}
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
