import React from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
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

  &.result-transition-enter {
    opacity: 0;
  }
  &.result-transition-enter-active {
    opacity: 1;
    transition: all 400ms ease-out;
  }

  @media (min-width: ${global.minTablet}) {
    max-width: 1092px;
    flex-direction: row;
  }
`;

const WrapperCol = styled.div`
  flex: 1 1 50%;
  @media (min-width: ${global.minTablet}) {
    margin: 0 24px 24px 24px;
  }
`;

const WrapperCard = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  color: #fff;
  padding: 10px;
  background-color: transparent;
  display: inline-block;
  margin-bottom: 24px;
  border: 1px solid;
  border-radius: 3px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  opacity: 0.9;
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

const Tag = styled.span`
  background-color: ${props => props.theme.flash};
  color: white;
  font-size: 11px;
  padding: 4px 8px;
  border-radius: 3px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const ResultDungeon = ({ data, animateResult, children }) => {
  const dataDungeonHeroic = data.filter(
    dungeon => dungeon.type === DUNGEONTYPE.heroic
  );

  const dataDungeonMythic = data.filter(
    dungeon => dungeon.type === DUNGEONTYPE.mythic
  );

  return (
    <CSSTransition
      in={animateResult}
      timeout={300}
      classNames="result-transition"
    >
      {state => (
        <WrapperResultDungeon animateResult={animateResult}>
          <WrapperCol>
            <Title>Heroic Dungeons</Title>

            {dataDungeonHeroic.map((dungeonHeroic, id) => (
              <WrapperCard key={id}>
                <Card isDone={dungeonHeroic.done}>
                  {dungeonHeroic.done ? <Tag>done</Tag> : null}
                  <CardTitle>{dungeonHeroic.name}</CardTitle>
                  <CardDescription>{dungeonHeroic.desc}</CardDescription>
                </Card>
              </WrapperCard>
            ))}
          </WrapperCol>
          <WrapperCol>
            <Title>Mythical Dungeons</Title>

            {dataDungeonMythic.map((dungeonMytic, id) => (
              <WrapperCard key={id}>
                <Card isDone={dungeonMytic.done}>
                  {dungeonMytic.done ? <Tag>done</Tag> : null}
                  <CardTitle>{dungeonMytic.name}</CardTitle>
                  <CardDescription>{dungeonMytic.desc}</CardDescription>
                </Card>
              </WrapperCard>
            ))}
          </WrapperCol>
        </WrapperResultDungeon>
      )}
    </CSSTransition>
  );
};

export default ResultDungeon;
