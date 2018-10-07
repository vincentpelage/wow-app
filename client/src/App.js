import React, { Component } from "react";
import { BrowserRouter as Route } from "react-router-dom";
// import { ThemeProvider } from "styled-components";

import Home from "./views/Home";
// import DungeonAchievements from "./views/DungeonAchievements";
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
    const Toto = () => <div>Toto</div>;
    const Tata = () => <div>Tata</div>;
    return (
      <div>
        <p>Home</p>
        <Route path="/toto" component={Toto} />
        <Route path="/tata" component={Tata} />
        <Route exact path="/" component={Home} />
      </div>
      // <ThemeProvider theme={this.state.theme}>
      /* <Route path="/" component={Home} />
        <Route path="/hauts-faits-donjon" component={DungeonAchievements} /> */
      // </ThemeProvider>
    );
  }
}

export default App;
