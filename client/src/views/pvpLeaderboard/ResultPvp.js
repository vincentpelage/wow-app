import React from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import Card from "../../components/card";
import { global } from "../../styles/theme/globalStyle";
import { renameSpec } from "../../helpers/renameSpec";
import { PVPTYPE } from "./PvpLeaderboard";
import { pictureClassList } from "../../datas/class";
import { pictureSpecList } from "../../datas/spec";

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
  flex: 0 0 20%;
  margin: 0px 24px 24px 0px;
  text-align: center;
`;

const CardImage = styled.img`
  width: 45px;
  height: 45px;
  margin-bottom: 8px;
`;

const CardResult = styled.p`
  background-color: ${props => props.theme.light};
  color: #fff;
  width: fit-content;
  margin: auto;
  padding: 5px 10px;
  border-radius: ${global.borderRadius};
  @media (min-width: ${global.minDesktop}) {
    font-size: 14px;
  }
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
  text-transform: capitalize;
  line-height: 2;
  @media (min-width: ${global.minTablet}) {
    font-size: 13px;
  }
`;

const ResultPvp = ({ data, type, region, ladder, animateResult, children }) => {
  const dataPvpFiltered = data.filter(
    result =>
      result.hasOwnProperty(region) && result[region].hasOwnProperty(ladder)
  )[0];

  const dataClass = dataPvpFiltered[region][ladder][PVPTYPE.class];
  const dataSpec = renameSpec(dataPvpFiltered[region][ladder][PVPTYPE.spec]);
  console.log(dataSpec);
  return (
    <CSSTransition
      in={animateResult}
      timeout={300}
      classNames="result-transition"
    >
      {state => (
        <WrapperResultPvp animateResult={animateResult}>
          {type === PVPTYPE.class &&
            dataClass.map((result, id) => (
              <WrapperCard key={id}>
                <Card noOpacity={true}>
                  <CardImage src={pictureClassList[Object.keys(result)]} />
                  <CardTitle>{Object.keys(result)}</CardTitle>
                  <CardResult>{Object.values(result)}%</CardResult>
                </Card>
              </WrapperCard>
            ))}

          {type === PVPTYPE.spec &&
            dataSpec.map((result, id) => (
              <WrapperCard key={id}>
                <Card noOpacity={true}>
                  <CardImage
                    src={
                      pictureSpecList[result.spec] ||
                      pictureSpecList[result.spec + result.class]
                    }
                  />
                  <CardTitle>{result.spec}</CardTitle>
                  <CardDescription>{result.class}</CardDescription>

                  <CardResult>{result.stat}%</CardResult>
                </Card>
              </WrapperCard>
            ))}
        </WrapperResultPvp>
      )}
    </CSSTransition>
  );
};

export default ResultPvp;
