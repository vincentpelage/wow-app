import React from "react";
import styled from "styled-components";
import Card from "../../components/card";
import { global } from "../../styles/theme/globalStyle";

const RAIDTYPE = {
  heroic: "heroicRaid",
  mythic: "mythicRaid"
};
const WrapperResultRaid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  margin: auto;
  padding: 24px 0;
  @media (min-width: ${global.minTablet}) {
    width: 75%;
    flex-direction: row;
  }
`;

const WrapperCard = styled.div`
  flex: 0 1 40%;
`;
const Title = styled.h2`
  color: #fff;
  padding: 10px;
  background-color: transparent;
  display: inline-block;
  margin: 10px;
  border: 1px solid;
  border-radius: 3px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 16px;
  opacity: 0.9;
`;
const CardTitle = styled.p`
  font-family: LifeCraftFont, sans-serif;
  font-size: 18px;
  margin-bottom: 5px;
  text-transform: lowercase;
  letter-spacing: 2px;
  @media (min-width: ${global.minTablet}) {
    font-size: 20px;
  }
`;
const CardDescription = styled.p`
  font-size: 11px;
  @media (min-width: ${global.minTablet}) {
    font-size: 13px;
  }
`;

const Tag = styled.span`
  background-color: ${props => props.theme.light};
  color: white;
  font-size: 11px;
  padding: 4px 8px;
  border-radius: 3px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const ResultRaid = ({ data, children }) => {
  const dataRaidHeroic = data.filter(raid => raid.type === RAIDTYPE.heroic);

  const dataRaidMythic = data.filter(raid => raid.type === RAIDTYPE.mythic);

  return (
    <WrapperResultRaid>
      <WrapperCard>
        {data &&
          Object.keys(data).length > 0 && (
            <div>
              <Title>Heroic Raids</Title>
              {dataRaidHeroic.map((raidHeroic, id) => (
                <Card key={id} isDone={raidHeroic.done}>
                  {raidHeroic.done ? <Tag>done</Tag> : null}
                  <CardTitle>{raidHeroic.name}</CardTitle>
                  <CardDescription>{raidHeroic.desc}</CardDescription>
                </Card>
              ))}
            </div>
          )}
      </WrapperCard>
      <WrapperCard>
        {data &&
          Object.keys(data).length > 0 && (
            <div>
              <Title>Mythical Raids</Title>
              {dataRaidMythic.map((raidMytic, id) => (
                <Card key={id} isDone={raidMytic.done}>
                  {raidMytic.done ? <Tag>done</Tag> : null}
                  <CardTitle>{raidMytic.name}</CardTitle>
                  <CardDescription>{raidMytic.desc}</CardDescription>
                </Card>
              ))}
            </div>
          )}
      </WrapperCard>
    </WrapperResultRaid>
  );
};

export default ResultRaid;