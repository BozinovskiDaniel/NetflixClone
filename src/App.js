import React, {Component} from 'react';
import View from './components/view';
import Landing from './components/landing';
import Movie from './components/movie';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

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
