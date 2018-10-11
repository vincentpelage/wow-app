import React from "react";
import styled from "styled-components";
import Banner from "../../components/Banner";
import Nav from "../../components/Nav";
import Input from "../../components/input/index";
import { BannerButton } from "../../components/button";
import Select from "../../components/select";
import ResultContainer from "../../components/ResultContainer";
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

const WrapperSelect = styled.div`
  flex: 1 0 50%;
  margin: 16px 0;
  @media (min-width: ${global.minTablet}) {
    margin: 0 16px;
  }
`;

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

class RaidsAchievements extends React.Component {
  state = {
    pseudo: "",
    selectedOption: null,
    isResultActive: false
  };

  handleInputChange = event => {
    this.setState({ pseudo: event.target.value });
  };

  handleSelectChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  handleClick = () => {
    this.setState({ isResultActive: true });
  };

  render() {
    const { toggleTheme } = this.props;
    const { selectedOption, pseudo, isResultActive } = this.state;

    return (
      <React.Fragment>
        <Nav toggleTheme={toggleTheme} />
        <Banner title="hauts-faits en raids" isResultActive={isResultActive}>
          <WrapperForm>
            <Input
              placeholder="Pseudo"
              type="text"
              onChange={this.handleInputChange}
              value={pseudo}
            />
            <WrapperSelect>
              <Select
                value={selectedOption}
                onChange={this.handleSelectChange}
                options={options}
                placeholder="Royaume"
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </WrapperSelect>
            <BannerButton
              fullWidth
              size="large"
              height="auto"
              onClick={this.handleClick}
            >
              Chercher
            </BannerButton>
          </WrapperForm>
        </Banner>
        <ResultContainer isResultActive={isResultActive} />
      </React.Fragment>
    );
  }
}

export default RaidsAchievements;
