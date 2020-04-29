import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundary';

const About = lazy(() => import('./pages/About'));

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Suspense fallback={<div>Loading...</div>}>
              <Route path="/about">
                <About />
              </Route>
            </Suspense>
          </Switch>
        </div>
      </Router>
    </ErrorBoundary>
  );
}
