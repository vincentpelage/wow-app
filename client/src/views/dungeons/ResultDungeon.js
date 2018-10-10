import React from "react";
import styled from "styled-components";
import Card from "../../components/card";
import { global } from "../../styles/theme/globalStyle";

const DUNGEONTYPE = {
  heroic: "heroicDungeon",
  mythic: "mythicDungeon"
};
const WrapperResultDungeon = styled.div`
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

const ResultDungeon = ({ data, children }) => {
  const dataDungeonHeroic = data.filter(
    donjon => donjon.type === DUNGEONTYPE.heroic
  );

  const dataDungeonMythic = data.filter(
    donjon => donjon.type === DUNGEONTYPE.mythic
  );

  return (
    <WrapperResultDungeon>
      <WrapperCard>
        {data &&
          Object.keys(data).length > 0 && (
            <div>
              <Title>Heroic Dungeons</Title>
              {dataDungeonHeroic.map((dungeonHeroic, id) => (
                <Card key={id} isDungeonDone={dungeonHeroic.done}>
                  <CardTitle>{dungeonHeroic.name}</CardTitle>
                  <CardDescription>{dungeonHeroic.desc}</CardDescription>
                </Card>
              ))}
            </div>
          )}
      </WrapperCard>
      <WrapperCard>
        {data &&
          Object.keys(data).length > 0 && (
            <div>
              <Title>Mythical Dungeons</Title>
              {dataDungeonMythic.map((dungeonMytic, id) => (
                <Card key={id} isDungeonDone={dungeonMytic.done}>
                  <CardTitle>{dungeonMytic.name}</CardTitle>
                  <CardDescription>{dungeonMytic.desc}</CardDescription>
                </Card>
              ))}
            </div>
          )}
      </WrapperCard>
    </WrapperResultDungeon>
  );
};

export default ResultDungeon;
