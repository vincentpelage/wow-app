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
import ResultRaid from "./ResultRaid";
import { global } from "../../styles/theme/globalStyle";
import Spinner from "../../components/spinner";
import ErrorMessage from "../../components/ErrorMessage";
import { startAnimation } from "../../helpers/animation";

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

const Search = styled.span`
  padding-left: 10px;
`;

class RaidsAchievements extends React.Component {
  state = {
    characterName: "",
    characterKingdom: "",
    characterRegion: "",
    errorMessage: "",
    isErrorDisplay: false
  };

  componentDidUpdate(prevProps) {
    if (
      this.props.raidsAchievements !== prevProps.raidsAchievements &&
      this.props.raidsAchievements.data !== prevProps.raidsAchievements.data &&
      this.props.raidsAchievements.data.error
    ) {
      this.setState({
        errorMessage:
          "Sorry, we can't found your datas. Are you sure you've filled the form correctly ?",
        isErrorDisplay: true
      });
    }

    if (
      this.props.raidsAchievements !== prevProps.raidsAchievements &&
      this.props.raidsAchievements.data !== prevProps.raidsAchievements.data &&
      !this.props.raidsAchievements.data.error
    ) {
      startAnimation(() => {
        this.setState({ animateResult: true });
      });
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
      this.props.actions.getRaidsAchievements(
        characterName,
        characterKingdom,
        characterRegion
      );
      this.setState({
        errorMessage: "",
        isErrorDisplay: false,
        animateResult: false
      });
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
        errorMessage: "Please fill all the fields :)",
        isErrorDisplay: true
      });
    } else {
      this.setState({
        errorMessage: "",
        isErrorDisplay: false
      });
    }
  };

  toggleErrorDisplay = () => {
    this.setState({ isErrorDisplay: !this.state.isErrorDisplay });
  };

  render() {
    const { toggleTheme, raidsAchievements } = this.props;
    const {
      characterName,
      errorMessage,
      isErrorDisplay,
      animateResult
    } = this.state;

    return (
      <React.Fragment>
        <ErrorMessage
          isErrorDisplay={isErrorDisplay}
          toggleErrorDisplay={this.toggleErrorDisplay}
        >
          {errorMessage}
        </ErrorMessage>

        <Nav toggleTheme={toggleTheme} />
        <Banner
          title="Raid Achievements"
          isResultActive={
            raidsAchievements.data &&
            !isErrorDisplay &&
            !raidsAchievements.data.error
              ? true
              : false
          }
        >
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
              <Spinner isLoading={raidsAchievements.isLoading} />
              <Search>Search</Search>
            </BannerButton>
          </WrapperForm>
        </Banner>

        {!isErrorDisplay &&
          raidsAchievements.data &&
          !raidsAchievements.data.error &&
          Object.keys(raidsAchievements.data).length > 0 && (
            <ResultContainer
              isResultActive={
                raidsAchievements.data &&
                !isErrorDisplay &&
                !raidsAchievements.data.error
                  ? true
                  : false
              }
            >
              <ResultRaid
                data={raidsAchievements.data}
                animateResult={animateResult}
              />
            </ResultContainer>
          )}
      </React.Fragment>
    );
  }
}

export default RaidsAchievements;
