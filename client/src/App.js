import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

// import Home from "./views/Home";
import DungeonAchievements from "./views/DungeonAchievements";
import { themeHorde, themeAlliance } from "./styles/theme/globalStyle";

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
        <DungeonAchievements toggleTheme={this.toggleTheme} />
      </ThemeProvider>
    );
  }
}

export default App;
