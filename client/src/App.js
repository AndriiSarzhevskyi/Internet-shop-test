// import logo from './logo.svg';
import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'

function App() {
  const isAuthenticated = true;
  const routes = useRoutes(isAuthenticated)
  return (
    // <h1>HELLO</h1>
    <Router>
      <div className="container">
        {routes}
      </div>
    </Router>

  );
}

export default App;
