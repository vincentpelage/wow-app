import React from "react";

class PvpLeaderboard extends React.Component {
  componentDidMount() {
    this.props.actions.getPvpLeaderboard();
  }
  render() {
    return (
      <div>
        <h1>PVP Leaderboard</h1>
          <pre>{this.props.pvpLeaderboard.data && JSON.stringify(this.props.pvpLeaderboard.data)}</pre>
      </div>
    );
  }
}

export default PvpLeaderboard;
