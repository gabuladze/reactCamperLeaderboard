import React from 'react';
import { render } from 'react-dom';

// Import Components
import Header from './Header';
import Leaderboard from './Leaderboard';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <Leaderboard />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
