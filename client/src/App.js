import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./views/Home";
import DungeonAchievements from "./views/DungeonAchievements";
import RaidAchievements from "./views/RaidAchievements";
import { themeHorde, themeAlliance } from "./styles/theme/globalStyle";
import { ThemeProvider } from "styled-components";

export const faction = {
  horde: "horde",
  alliance: "alliance"
};

class App extends Component {
  state = {
    theme: themeHorde
  };

  selectTheme = faction => {
    let theme;
    faction === "horde" ? (theme = themeHorde) : (theme = themeAlliance);
    this.setState({ theme });
  };

  toggleTheme = () => {
    let theme = this.state.theme;
    theme === themeHorde ? (theme = themeAlliance) : (theme = themeHorde);

    this.setState({ theme });
  };
  render() {
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
              <DungeonAchievements toggleTheme={this.toggleTheme} />
            )}
          />
          <Route
            path="/hauts-faits-raid"
            render={() => <RaidAchievements toggleTheme={this.toggleTheme} />}
          />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
