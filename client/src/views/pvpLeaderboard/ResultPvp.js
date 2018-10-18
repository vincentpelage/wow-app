import React from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import Card from "../../components/card";
import { global } from "../../styles/theme/globalStyle";

const WrapperResultPvp = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  color: #fff;
  margin: auto;
  padding: 24px 0;

  &.result-transition-enter {
    opacity: 0;
  }
  &.result-transition-enter-active {
    opacity: 1;
    transition: all 400ms ease-out;
  }
`;

const WrapperCard = styled.div`
  flex: 0 0 25%;
  margin: 0px 24px 24px 0px;
  text-align: center;
`;

const CardTitle = styled.p`
  font-size: 12px;
  margin-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 400;

  @media (min-width: ${global.minTablet}) {
    font-size: 14px;
  }
`;
const CardDescription = styled.p`
  font-size: 11px;
  @media (min-width: ${global.minTablet}) {
    font-size: 13px;
  }
`;

const ResultPvp = ({ data, type, region, ladder, animateResult, children }) => {
  const dataPvpFiltered = data.filter(
    result =>
      result.hasOwnProperty(region) && result[region].hasOwnProperty(ladder)
  )[0];

  return (
    <CSSTransition
      in={animateResult}
      timeout={300}
      classNames="result-transition"
    >
      {state => (
        <WrapperResultPvp animateResult={animateResult}>
          {data &&
            Object.keys(data).length > 0 &&
            dataPvpFiltered[region][ladder][type].map((result, id) => (
              <WrapperCard key={id}>
                <Card noOpacity={true}>
                  <CardTitle>{Object.keys(result)}</CardTitle>
                  <CardDescription>{Object.values(result)}%</CardDescription>
                </Card>
              </WrapperCard>
            ))}
        </WrapperResultPvp>
      )}
    </CSSTransition>
  );
};

export default ResultPvp;
