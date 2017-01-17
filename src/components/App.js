import React from 'react';
import { render } from 'react-dom';

// Import Components
import Header from './Header';
import Leaderboard from './Leaderboard';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <Leaderboard />
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
