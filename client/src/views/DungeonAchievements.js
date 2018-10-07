import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import Input from "../components/input/index";

const WrapperInput = styled.div`
  z-index: 3;
  margin-top: 16px;
`;

const DungeonAchievements = ({ toggleTheme }) => {
  return (
    <React.Fragment>
      <Nav toggleTheme={toggleTheme} />
      <Banner title="hauts-faits en donjons">
        <WrapperInput>
          <Input placeholder="Pseudo" />
        </WrapperInput>
      </Banner>
    </React.Fragment>
  );
};

export default DungeonAchievements;
