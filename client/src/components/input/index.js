import React from "react";
import styled from "styled-components";
import { getInputStyles, getInnerStyle } from "./inputStyles";

const Input = ({ cursor, width, defaultValue, placeholder, type, value }) => {
  const InputWrapper = styled.div`
    ${getInputStyles};
  `;

  // The actual input element
  const InputElement = styled.input`
    flex-grow: 1;
    background: none;
    border: none;
    outline: none;
    transition: box-shadow 200ms ease-in-out;
    transition-delay: 50ms;
    ${getInnerStyle};
  `;

  return (
    <InputWrapper cursor={cursor} width={width}>
      <InputElement
        defaultValue={defaultValue}
        placeholder={placeholder}
        onMouseDown={e => {
          // If selected directly don't refocus.
          e.stopPropagation();
        }}
        type={type}
        value={value}
      />
    </InputWrapper>
  );
};

export default Input;
