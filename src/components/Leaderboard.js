import React from 'react';

import getTopCampers from '../services/CamperService';

class Leaderboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      campers: [],
      sortedBy: ''
    };

    getTopCampers(campers => this.setState({ campers: campers }));
  }

  // Sort campers by points from last 30 days
  sortByRecent() {
    let campers = this.state.campers.sort((a, b) => {
      return b.recent - a.recent;
    });

    this.setState(
      {
        campers: campers,
        sortedBy: 'recent'
      }
    );
  }


  // Sort campers by points from all time
  sortByAllTime() {
    let campers = this.state.campers.sort((a, b) => {
      return b.alltime - a.alltime;
    });

    this.setState(
      {
        campers: campers,
        sortedBy: 'alltime'
      }
    );
  }

  render() {
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th onClick={this.sortByRecent.bind(this)} className={this.state.sortedBy === 'recent' ? 'sorted' : ''}>
                Points in past 30 days
                {(this.state.sortedBy === 'recent') && <span className="glyphicon glyphicon-chevron-down"></span>}
              </th>
              <th onClick={this.sortByAllTime.bind(this)} className={this.state.sortedBy === 'alltime' ? 'sorted' : ''}>
                Total points
                {(this.state.sortedBy === 'alltime') && <span className="glyphicon glyphicon-chevron-down"></span>}
              </th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.campers.map((camper, index) => {
                return (
                  <tr key={index + 1}>
                    <th scope="row">{index + 1}</th>
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