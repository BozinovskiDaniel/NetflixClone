import React, {Component} from 'react';
import './App.scss';
import Nav from './components/nav';
import View from './components/view';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <View />
      </div>
    );
  }

}

export default App;
