import React from "react";
import styled from "styled-components";
import { global } from "../styles/theme/globalStyle";

const WrapperErrorMessage = styled.div`
  z-index: 3;
  transition: all 0.2s ease-in-out;
  position: absolute;
  bottom: 100px;
  right: 0;
  overflow: hidden;
`;

const Message = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.light};
  border: 3px solid ${props => props.theme.dark};
  color: #fff;
  min-height: 60px;
  padding: 10px 45px;
  border-radius: ${global.borderRadius};
  white-space: nowrap;
  font-size: 14px;
`;

const Close = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
`;

const ErrorMessage = ({ isErrorDisplay, toggleErrorDisplay, children }) => {
  return (
    <WrapperErrorMessage isErrorDisplay={isErrorDisplay}>
      <Message>{children}</Message>
      <Close
        type="button"
        onClick={toggleErrorDisplay}
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </Close>
    </WrapperErrorMessage>
  );
};

export default ErrorMessage;
