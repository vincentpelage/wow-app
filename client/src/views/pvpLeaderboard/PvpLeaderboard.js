import React from "react";
import styled from "styled-components";
import Banner from "../../components/Banner";
import Nav from "../../components/Nav";
import ResultContainer from "../../components/ResultContainer";
import Filter from "./Filter";
import ResultPvp from "./ResultPvp";
import { global } from "../../styles/theme/globalStyle";

export const PVPFILTER = {
  type: "type",
  region: "region",
  ladder: "ladder"
};

export const PVPTYPE = {
  class: "class",
  spec: "spec"
};

export const PVPREGION = {
  eu: "eu",
  us: "us"
};

export const PVPLADDER = {
  deux: "2v2",
  trois: "3v3",
  rbg: "rbg"
};

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  @media (min-width: ${global.minTablet}) {
    width: 75%;
  }
`;

class PvpLeaderboard extends React.Component {
  state = {
    type: PVPTYPE.class,
    region: PVPREGION.eu,
    ladder: PVPLADDER.deux
  };

  componentDidMount() {
    this.props.actions.getPvpLeaderboard();
  }

  onChangeType = event => {
    this.setState({ type: event.target.value });
  };

  onChangeRegion = event => {
    this.setState({ region: event.target.value });
  };

  onChangeLadder = event => {
    this.setState({ ladder: event.target.value });
  };

  render() {
    const { toggleTheme, pvpLeaderboard } = this.props;
    const { type, region, ladder } = this.state;

    const isDataReceived =
      pvpLeaderboard.data &&
      pvpLeaderboard.data.data &&
      Object.keys(pvpLeaderboard.data.data).length > 0;

    return (
      <React.Fragment>
        <Nav toggleTheme={toggleTheme} />
        <Banner
          title="pvp leaderboard"
          isResultActive={isDataReceived ? true : false}
        />

        {isDataReceived && (
          <ResultContainer isResultActive={isDataReceived ? true : false}>
            <ResultWrapper>
              <Filter
                type={type}
                region={region}
                ladder={ladder}
                onChangeType={this.onChangeType}
                onChangeRegion={this.onChangeRegion}
                onChangeLadder={this.onChangeLadder}
              />
              <ResultPvp
                data={pvpLeaderboard.data.data}
                type={type}
                region={region}
                ladder={ladder}
              />
            </ResultWrapper>
          </ResultContainer>
        )}
      </React.Fragment>
    );
  }
}

export default PvpLeaderboard;
