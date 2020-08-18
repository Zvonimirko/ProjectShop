import React from 'react';

import Homepage from './pages/homepage/homepage.component';

import './App.scss';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  render() {
      return (
      <div className="App">
        <Homepage />
      </div>
    );
  }
}

export default App;
