import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import Input from "../components/input/index";
import { optionsKingdom } from "../datas/kingdom";
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

class DungeonAchievements extends React.Component {
  state = {
    pseudo: "",
    selectedKingdom: "",
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
    const pseudo = event.target.value.trim();
    this.setState({ pseudo });
  };

  handleSelectChange = selectedKingdom => {
    this.setState({ selectedKingdom: selectedKingdom.value });
  };

  handleSubmit = () => {
    const { pseudo, selectedKingdom } = this.state;

    if (pseudo.length > 0 && selectedKingdom.length > 0) {
      this.props.actions.dungeonAchievementsAction(pseudo, selectedKingdom);
      this.setState({ emptyInputAlert: "" });
    } else {
      this.handleEmptyInput();
    }
  };

  handleEmptyInput = () => {
    const { pseudo, selectedKingdom } = this.state;
    if (pseudo.length === 0 && selectedKingdom.length > 0) {
      this.setState({
        emptyInputAlert: "Veuillez renseigner votre pseudo :-)"
      });
    } else if (selectedKingdom.length === 0 && pseudo.length > 0) {
      this.setState({
        emptyInputAlert: "Veuillez renseigner votre royaume :-)"
      });
    } else {
      this.setState({
        emptyInputAlert: "Veuillez renseigner votre pseudo et votre royaume :-)"
      });
    }
  };

  render() {
    const { toggleTheme } = this.props;
    const { pseudo, isResultActive } = this.state;

    console.log(this.state.emptyInputAlert);

    return (
      <React.Fragment>
        <Nav toggleTheme={toggleTheme} />
        <Banner title="hauts-faits en donjons" isResultActive={isResultActive}>
          <WrapperForm>
            <Input
              placeholder="Pseudo"
              type="text"
              onChange={this.handleInputChange}
              value={pseudo}
            />
            <WrapperSelect>
              <Select
                onChange={this.handleSelectChange}
                options={optionsKingdom}
                placeholder="Royaume"
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

export default DungeonAchievements;
