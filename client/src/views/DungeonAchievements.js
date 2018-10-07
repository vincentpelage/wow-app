import React from "react";
// import styled from "styled-components";
import Banner from "../components/Banner";
import Nav from "../components/Nav";

const DungeonAchievements = ({ toggleTheme }) => {
  return (
    <React.Fragment>
      <Nav toggleTheme={toggleTheme} />
      <Banner title="hauts-faits en donjons" />
    </React.Fragment>
  );
};

export default DungeonAchievements;
