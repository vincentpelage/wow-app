import React from "react";
import styled from "styled-components";
import { global } from "../../styles/theme/globalStyle";

const RadioButtonWrapper = styled.div`
  border: solid ${global.borderWidth} ${props => props.theme.light};
  display: inline-block;
  border-radius: ${global.borderRadius};
  overflow: hidden;
  margin-right: ${props => (props.margin ? props.margin : "0")};
  margin-bottom: 16px;

  @media (min-width: ${global.minTablet}) {
    margin-bottom: 0;
  }
`;

export class RadioButtonGroup extends React.Component {
  render() {
    const { margin, children } = this.props;

    return <RadioButtonWrapper margin={margin}>{children}</RadioButtonWrapper>;
  }
}
