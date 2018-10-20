import React from "react";
import styled from "styled-components";
import { getRadioButtonCheckedStyles } from "./styles";
import { global } from "../../styles/theme/globalStyle";

const Label = styled.label`
  display: inline-block;
  cursor: pointer;
  padding: 5px 20px;
  font-size: 10px;
  text-transform: uppercase;
  transition: all 200ms ease-in-out;
  ${getRadioButtonCheckedStyles};
  & + label {
    border-left: solid ${global.borderWidth} ${props => props.theme.light};
  }
  @media (min-width: ${global.minTablet}) {
    font-size: 12px;
  }
  @media (min-width: ${global.minDesktop}) {
    font-size: 14px;
  }
`;

const RadioButtonElement = styled.input`
  display: none;
`;

class RadioButton extends React.Component {
  render() {
    const { label, name, value, onChange, isChecked } = this.props;

    return (
      <Label isChecked={isChecked}>
        {label}
        <RadioButtonElement
          type="radio"
          name={name}
          value={value}
          onChange={onChange}
          checked={isChecked}
        />
      </Label>
    );
  }
}

export * from "./RadioButtonGroup";
export default RadioButton;
