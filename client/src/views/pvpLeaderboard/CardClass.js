import React from "react";
import styled from "styled-components";
import { pictureClassList } from "../../datas/class";
import { Card } from "../../components/card/index";
import { global } from "../../styles/theme/globalStyle";

const WrapperCard = styled.div`
  flex: 1 1 100%;
  margin-bottom: 24px;
  text-align: center;
  @media (min-width: ${global.minTablet}) {
    flex: 1 1 20%;
    margin: 12px;
  }
`;

const CardImage = styled.img`
  width: 45px;
  height: 45px;
  margin-bottom: 8px;
`;

const CardResult = styled.p`
  background-color: ${props => props.theme.flash};
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

export const CardClass = ({ result }) => {
  return (
    <WrapperCard>
      <Card noOpacity={true}>
        <CardImage src={pictureClassList[Object.keys(result)]} />
        <CardTitle>{Object.keys(result)}</CardTitle>
        <CardResult>{Object.values(result)}%</CardResult>
      </Card>
    </WrapperCard>
  );
};
