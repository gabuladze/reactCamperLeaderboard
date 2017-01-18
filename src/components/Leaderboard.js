import React from 'react';

import getTopCampers from '../services/CamperService';

class Leaderboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      campers: []
    };

    getTopCampers(campers => this.setState({ campers: campers }));
  }

  sortByRecent() {
    let campers = this.state.campers.sort((a, b) => {
      return b.recent - a.recent;
    });

    this.setState({ campers: campers });
  }

  sortByAllTime() {
    let campers = this.state.campers.sort((a, b) => {
      return b.alltime - a.alltime;
    });

    this.setState({ campers: campers });
  }

  render() {
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th onClick={this.sortByRecent.bind(this)}>Points in past 30 days</th>
              <th onClick={this.sortByAllTime.bind(this)}>Total points</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.campers.map((camper, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index}</th>
                    <td><img src={camper.img} />{camper.username}</td>
                    <td>{camper.recent}</td>
                    <td>{camper.alltime}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Leaderboard;