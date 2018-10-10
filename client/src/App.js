import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./views/Home";
import RaidsAchievements from "./views/RaidsAchievements";
import DungeonsAchievements from "./containers/DungeonsAchievements";
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

    componentWillMount(){
      if(localStorage.getItem("faction")){
        const themeLocalStorage = JSON.parse(localStorage.getItem("faction"));
        this.setState({theme: themeLocalStorage});
      }
    }

  selectTheme = faction => {
    let theme;
    faction === "horde" ? (theme = themeHorde) : (theme = themeAlliance);
    localStorage.setItem("faction", JSON.stringify(theme))
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
              <DungeonsAchievements toggleTheme={this.toggleTheme} />
            )}
          />
          <Route
            path="/hauts-faits-raid"
            render={() => <RaidsAchievements toggleTheme={this.toggleTheme} />}
          />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
