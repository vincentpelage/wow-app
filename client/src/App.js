import React, { Component } from "react";
import { Route } from "react-router-dom";
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
        <div>
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
            render={() => <RaidsAchievements toggleTheme={this.toggleTheme} />}
          />
            <Route
            path="/hauts-faits-pvp"
            render={() => <PvpLeaderboard />}
          />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
