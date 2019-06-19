import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/nav/Nav';
import Counters from './components/counter/counters';
import MyRef from './components/ref';
import Todos from './components/todo/Todos';
const SVG = lazy(() => import('./components/svg'));
const Home = () => (
  <>
    <Counters />
    <MyRef />
    <Todos />
  </>
);
function App() {
  return (
    <Router>
      <Route component={Nav} /> {/* Route with no path will always match and render the component  */}
      <header className="App-header">
        <Suspense fallback={<p className="alert alert-danger">SVG is loading...</p>}>
          <SVG url="" className="App-logo mt-1" />
        </Suspense>
      </header>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route
        path="/#home"
        exact
        render={() => (
          <>
            <Counters />
            <h1 className="text-center">Welcome To Home </h1>
          </>
        )}
      />
      <Route path="/param/:param" exact component={UrlParam} />
      <Route path="/counter-cart" exact component={Counters} />
      <Route path="/todo" exact component={Todos} />
      <Redirect from="/login" to="/todo/" />
      <Route component={_404} />
      </Switch>
    </Router>
  );
}
function UrlParam({ match }) {
  return (
    <div>
      <h3 className="text-center">Parameter: {match.params.param}</h3>
    </div>
  );
}
function _404({ location }) {
  let params = new URLSearchParams(location.search);
  return (
    <div>
      <h2 className="text-center">Page <code>{location.pathname}</code>  Not Found 404 ERROR</h2>
      <h3 className="text-center">? name = " {params.get("name")} "</h3>
    </div>
  );
}
export default App;