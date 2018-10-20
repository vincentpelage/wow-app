import React from "react";
import styled from "styled-components";
import { global } from "../../styles/theme/globalStyle";
import { renameSpec } from "../../helpers/renameSpec";
import { PVPTYPE } from "./PvpLeaderboard";
import { CardClass } from "./CardClass";
import { CardSpec } from "./CardSpec";

const WrapperResultPvp = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: ${global.minTablet}) {
    flex-direction: row;
    margin: auto;
  }
`;

const ResultPvp = ({ data, type, region, ladder, children }) => {
  const dataPvpFiltered = data.filter(
    result =>
      result.hasOwnProperty(region) && result[region].hasOwnProperty(ladder)
  )[0];

  const dataClass = dataPvpFiltered[region][ladder][PVPTYPE.class];
  const dataSpec = renameSpec(dataPvpFiltered[region][ladder][PVPTYPE.spec]);
  return (
    <WrapperResultPvp>
      {type === PVPTYPE.class &&
        dataClass.map((result, id) => <CardClass key={id} result={result} />)}

      {type === PVPTYPE.spec &&
        dataSpec.map((result, id) => <CardSpec key={id} result={result} />)}
    </WrapperResultPvp>
  );
};

export default ResultPvp;
