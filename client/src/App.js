import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./views/Home";
import DungeonAchievements from "./containers/DungeonAchievements";
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
          <Route path="/hauts-faits-donjon" component={DungeonAchievements} />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
