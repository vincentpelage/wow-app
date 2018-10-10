import React from "react";
import styled from "styled-components";

const WrapperResult = styled.div`
  background-color: ${props => props.theme.dark};
  width: 100%;
  min-height: 500px;
  display: ${props => (props.isResultActive ? "block" : "none")};
`;

const ResultContainer = ({ isResultActive, children }) => {
  return (
    <WrapperResult isResultActive={isResultActive}>{children}</WrapperResult>
  );
};

export default ResultContainer;
