import React from "react";
import RadioButton, { RadioButtonGroup } from "../../components/radioButton";
import { PVPTYPE, PVPREGION, PVPLADDER, PVPFILTER } from "./PvpLeaderboard";
import styled from "styled-components";
import { global } from "../../styles/theme/globalStyle";

const Form = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  @media (min-width: ${global.minTablet}) {
    margin: 12px;
  }
`;

const Filter = ({
  type,
  region,
  ladder,
  onChangeType,
  onChangeRegion,
  onChangeLadder
}) => {
  const margin = "16px";
  return (
    <Form>
      <RadioButtonGroup margin={margin}>
        <RadioButton
          label={PVPTYPE.class}
          name={PVPFILTER.type}
          value={PVPTYPE.class}
          isChecked={type === PVPTYPE.class}
          onChange={onChangeType}
        />
        <RadioButton
          label={PVPTYPE.spec}
          name={PVPFILTER.type}
          value={PVPTYPE.spec}
          isChecked={type === PVPTYPE.spec}
          onChange={onChangeType}
        />
      </RadioButtonGroup>

      <RadioButtonGroup margin={margin}>
        <RadioButton
          label={PVPLADDER.deux}
          name={PVPFILTER.ladder}
          value={PVPLADDER.deux}
          isChecked={ladder === PVPLADDER.deux}
          onChange={onChangeLadder}
        />
        <RadioButton
          label={PVPLADDER.trois}
          name={PVPFILTER.ladder}
          value={PVPLADDER.trois}
          isChecked={ladder === PVPLADDER.trois}
          onChange={onChangeLadder}
        />
        <RadioButton
          label={PVPLADDER.rbg}
          name={PVPFILTER.ladder}
          value={PVPLADDER.rbg}
          isChecked={ladder === PVPLADDER.rbg}
          onChange={onChangeLadder}
        />
      </RadioButtonGroup>

      <RadioButtonGroup margin={margin}>
        <RadioButton
          label={PVPREGION.eu}
          name={PVPFILTER.region}
          value={PVPREGION.eu}
          isChecked={region === PVPREGION.eu}
          onChange={onChangeRegion}
        />
        <RadioButton
          label={PVPREGION.us}
          name={PVPFILTER.region}
          value={PVPREGION.us}
          isChecked={region === PVPREGION.us}
          onChange={onChangeRegion}
        />
      </RadioButtonGroup>
    </Form>
  );
};

export default Filter;
