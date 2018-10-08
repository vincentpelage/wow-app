import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import Input from "../components/input/index";
import Select from "react-select";

const WrapperForm = styled.div`
  z-index: 3;
  margin-top: 16px;
`;

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

class DungeonAchievements extends React.Component {
  state = {
    pseudo: "",
    selectedOption: null
  };

  handleInputChange = event => {
    this.setState({ pseudo: event.target.value });
  };

  handleSelectChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  handleSubmit = () => {
    this.props.actions.dungeonAchievementsAction();
    console.log("Form Submit");
  };

  render() {
    console.log(this.props);
    const { toggleTheme } = this.props;
    const { selectedOption, pseudo } = this.state;
    const customSelectStyle = {
      placeholder: () => ({
        fontFamily: "Roboto",
        fontWeight: "300"
      }),
      menuList: () => ({
        fontFamily: "Roboto",
        fontWeight: "300"
      })
    };

    return (
      <React.Fragment>
        <Nav toggleTheme={toggleTheme} />
        <Banner title="hauts-faits en donjons">
          <WrapperForm>
            <Input
              placeholder="Pseudo"
              type="text"
              onChange={this.handleInputChange}
              value={pseudo}
            />
            <Select
              value={selectedOption}
              onChange={this.handleSelectChange}
              options={options}
              placeholder="Royaume"
              styles={customSelectStyle}
              isSearchable={false}
            />
            <button onClick={this.handleSubmit}>submit</button>
            {this.props.dungeonAchievementsReducer.data && (
              <pre>
                {this.props.dungeonAchievementsReducer.data.map((obj, id) => (
                  <li key={id}>{obj.name}</li>
                ))}
              </pre>
            )}
          </WrapperForm>
        </Banner>
      </React.Fragment>
    );
  }
}

export default DungeonAchievements;
