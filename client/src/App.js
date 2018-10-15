import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import Home from "./views/Home";
import RaidsAchievements from "./containers/RaidsAchievements";
import DungeonsAchievements from "./containers/DungeonsAchievements";
import PvpLeaderboard from "./containers/PvpLeaderboard";
import { themeHorde, themeAlliance } from "./styles/theme/globalStyle";
import { ThemeProvider } from "styled-components";
import setLocalStorageTheme from "./utils";

export const faction = {
  horde: "horde",
  alliance: "alliance"
};

const WrapperSwitch = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  &.pageSlider-enter {
    transform: translate3d(-100%, 0, 0);
  }

  &.pageSlider-enter.pageSlider-enter-active {
    transform: translate3d(0, 0, 0);
    transition: all 600ms;
  }
  &.pageSlider-exit {
    transform: translate3d(0, 0, 0);
  }

  &.pageSlider-exit.pageSlider-exit-active {
    transform: translate3d(100%, 0, 0);
    transition: all 600ms;
  }
`;

class App extends Component {
  state = {
    theme: {}
  };

  componentDidMount() {
    if (localStorage.getItem("faction")) {
      const themeLocalStorage = JSON.parse(localStorage.getItem("faction"));
      this.setState({ theme: themeLocalStorage });
    } else {
      this.setState({ theme: themeHorde });
    }
  }

  selectTheme = faction => {
    let theme;
    faction === "horde" ? (theme = themeHorde) : (theme = themeAlliance);
    setLocalStorageTheme(theme);
    this.setState({ theme });
  };

  toggleTheme = () => {
    let theme = this.state.theme;
    theme === themeHorde ? (theme = themeAlliance) : (theme = themeHorde);
    setLocalStorageTheme(theme);
    this.setState({ theme });
  };
  render() {
    if (Object.keys(this.state.theme).length === 0) {
      return null;
    }
    return (
      <ThemeProvider theme={this.state.theme}>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={500}
                classNames="pageSlider"
                mountOnEnter={true}
                unmountOnExit={true}
              >
                <WrapperSwitch>
                  <Switch location={location}>
                    <Route
                      exact
                      path="/"
                      render={() => <Home selectTheme={this.selectTheme} />}
                    />
                    <Route
                      path="/hauts-faits-donjon"
                      render={() => (
                        <DungeonsAchievements toggleTheme={this.toggleTheme} />
                      )}
                    />
                    <Route
                      path="/hauts-faits-raid"
                      render={() => (
                        <RaidsAchievements toggleTheme={this.toggleTheme} />
                      )}
                    />
                    <Route
                      path="/hauts-faits-pvp"
                      render={() => <PvpLeaderboard />}
                    />
                  </Switch>
                </WrapperSwitch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </ThemeProvider>
    );
  }
}

export default withRouter(App);
