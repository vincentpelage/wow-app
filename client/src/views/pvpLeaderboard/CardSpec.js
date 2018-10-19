import React from "react";
import styled from "styled-components";
import { pictureSpecList } from "../../datas/spec";
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

const CardDescription = styled.p`
  font-size: 11px;
  text-transform: capitalize;
  margin-bottom: 8px;
  @media (min-width: ${global.minTablet}) {
    font-size: 13px;
  }
`;

export const CardSpec = ({ result }) => {
  return (
    <WrapperCard>
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
  );
};
