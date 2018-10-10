import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import Input from "../components/input/index";
import { optionsKingdom } from "../datas/kingdom";
import { optionsRegions } from "../datas/regions";
import { BannerButton } from "../components/button";
import Select from "../components/select";
import Result from "../components/Result";
import { global } from "../styles/theme/globalStyle";

const WrapperForm = styled.div`
  z-index: 3;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  @media (min-width: ${global.minTablet}) {
    display: inline-flex;
    flex-direction: row;
    align-items: stretch;
    width: 60%;
  }
  @media (min-width: ${global.minDesktop}) {
    width: 40%;
  }
`;

const WrapperSelect = styled.div`
  flex: 1 0 50%;
  margin: 16px 0;
  @media (min-width: ${global.minTablet}) {
    margin: 0 16px;
  }
`;

class DungeonsAchievements extends React.Component {
  state = {
    characterName: "",
    characterKingdom: "",
      characterRegion: "",
    emptyInputAlert: "",
    isResultActive: false
  };

  componentDidUpdate(prevProps) {
    if (
      this.props.dungeonAchievementsReducer.data !==
      prevProps.dungeonAchievementsReducer.data
    ) {
      this.setState({ isResultActive: true });
    }
  }

  handleInputChange = event => {
    const characterName = event.target.value.trim();
    this.setState({ characterName });
  };

  handleSelectChange = characterKingdom => {
    this.setState({ characterKingdom: characterKingdom.value });
  };

    handleSelectRegionChange = characterRegion => {
    this.setState({ characterRegion: characterRegion.value });
  };

  handleSubmit = () => {
    const { characterName, characterKingdom, characterRegion } = this.state;

    if (characterName.length > 0 && characterKingdom.length > 0 && characterRegion.length > 0) {
      this.props.actions.dungeonAchievementsAction(characterName, characterKingdom, characterRegion);
      this.setState({ emptyInputAlert: "" });
    } else {
      this.handleEmptyInput();
    }
  };

  handleEmptyInput = () => {
    const { characterName, characterKingdom, characterRegion } = this.state;
    if (characterName.length === 0 || characterKingdom.length === 0 || characterRegion.length === 0) {
      this.setState({
        emptyInputAlert: "Veuillez renseigner tous les champs :-)"
      });
    } else {
      this.setState({
        emptyInputAlert: ""
      });
    }
  };

  render() {
    const { toggleTheme } = this.props;
    const { characterName, isResultActive } = this.state;

    console.log(this.state.emptyInputAlert);

    return (
      <React.Fragment>
        <Nav toggleTheme={toggleTheme} />
        <Banner title="hauts-faits en donjons" isResultActive={isResultActive}>
          <WrapperForm>
            <Input
              placeholder="Character"
              type="text"
              onChange={this.handleInputChange}
              value={characterName}
            />
            <WrapperSelect>
              <Select
                onChange={this.handleSelectChange}
                options={optionsKingdom}
                placeholder="Kingdom"
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </WrapperSelect>
            <WrapperSelect>
            <Select
              onChange={this.handleSelectRegionChange}
              options={optionsRegions}
              placeholder="Region"
              className="react-select-container"
              classNamePrefix="react-select"
            />
          </WrapperSelect>
            <BannerButton
              fullWidth
              size="large"
              height="auto"
              onClick={this.handleSubmit}
            >
              Chercher
            </BannerButton>
          </WrapperForm>
        </Banner>
        <Result isResultActive={isResultActive}>
          {this.props.dungeonAchievementsReducer.data &&
            Object.keys(this.props.dungeonAchievementsReducer.data).length >
              0 && (
              <ul>
                {this.props.dungeonAchievementsReducer.data.map((obj, id) => (
                  <li key={id}>{obj.name}</li>
                ))}
              </ul>
            )}
        </Result>
      </React.Fragment>
    );
  }
}

export default DungeonsAchievements;
