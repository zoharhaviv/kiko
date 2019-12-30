import React from 'react';
import {HashRouter as Router,Switch, Route, Link} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to='/'>HomePage</Link>
        <Link to='/page2'>2</Link>
        <Switch>
          <Route exact path='/' components={()=>{return<h1>HomePage</h1>}}/>
          <Route exact path='/page2' components={()=>{return<h1>HomePage</h1>}}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
