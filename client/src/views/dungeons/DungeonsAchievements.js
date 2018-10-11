import React from "react";
import styled from "styled-components";
import Banner from "../../components/Banner";
import Nav from "../../components/Nav";
import Input from "../../components/input/index";
import { optionsKingdom } from "../../datas/kingdom";
import { optionsRegions } from "../../datas/regions";
import { BannerButton } from "../../components/button";
import Select from "../../components/select";
import ResultContainer from "../../components/ResultContainer";
import ResultDungeon from "./ResultDungeon";
import { global } from "../../styles/theme/globalStyle";

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

const WrapperInput = styled.div`
  margin: 0 0 16px 0;
  @media (min-width: ${global.minTablet}) {
    margin: 0 16px 0 0;
  }
`;

const WrapperSelect = styled.div`
  flex: 1 0 40%;
  margin: 0 0 16px 0;
  @media (min-width: ${global.minTablet}) {
    margin: 0 16px 0 0;
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

    if (
      characterName.length > 0 &&
      characterKingdom.length > 0 &&
      characterRegion.length > 0
    ) {
      this.props.actions.dungeonAchievementsAction(
        characterName,
        characterKingdom,
        characterRegion
      );
      this.setState({ emptyInputAlert: "" });
    } else {
      this.handleEmptyInput();
    }
  };

  handleEmptyInput = () => {
    const { characterName, characterKingdom, characterRegion } = this.state;
    if (
      characterName.length === 0 ||
      characterKingdom.length === 0 ||
      characterRegion.length === 0
    ) {
      this.setState({
        emptyInputAlert: "Please fill all the fields :)"
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
    const data = this.props.dungeonAchievementsReducer.data;

    return (
      <React.Fragment>
        <Nav toggleTheme={toggleTheme} />
        <Banner title="Dungeon Achievements" isResultActive={isResultActive}>
          <WrapperForm>
            <WrapperInput>
              <Input
                placeholder="Character"
                type="text"
                onChange={this.handleInputChange}
                value={characterName}
                fullWidth
              />
            </WrapperInput>
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
              Search
            </BannerButton>
          </WrapperForm>
        </Banner>
        <ResultContainer isResultActive={isResultActive}>
          {data &&
            Object.keys(data).length > 0 && <ResultDungeon data={data} />}
        </ResultContainer>
      </React.Fragment>
    );
  }
}

export default DungeonsAchievements;
