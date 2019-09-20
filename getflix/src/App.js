import React, {Component} from 'react';
import './App.scss';
import View from './components/view';
import Landing from './components/landing';
import Movie from './components/movie';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/view" component={View} />
            <Route path="/movie" component={Movie} />
          </Switch>
        </div>
      </Router>
    );
  }

}

export default App;
