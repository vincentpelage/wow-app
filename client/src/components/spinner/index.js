import * as React from "react";
import styled, { keyframes } from "styled-components";
import { getSpinnerStyles } from "./styles";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.span`
  ${getSpinnerStyles};
`;

const Wrapper = styled.svg`
  animation: ${spin} 800ms cubic-bezier(0.4, 0.15, 0.6, 0.85) infinite;
`;

const Circle = styled.circle`
  stroke-dasharray: 69;
  stroke-dashoffset: 55;
`;

const Spinner = ({ size, isLoading }) => {
  return (
    <StyledSpinner {...size} isLoading={isLoading}>
      <Wrapper viewBox="0 0 24 24" width="24" height="24">
        <Circle
          innerRef={ref => {
            if (ref) {
              this.spinnerCircle = ref;
            }
          }}
          cx="12"
          cy="12"
          strokeWidth="2"
          r="9"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
        />
      </Wrapper>
    </StyledSpinner>
  );
};

export default Spinner;
