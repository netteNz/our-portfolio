import React from 'react';
import {Header} from './components/Header'
import { Switch, Route } from 'react-router-dom';
import {Home} from './components/Home'
import {About} from './components/About'

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </Switch>
    </div>
  );
}

export default App;
