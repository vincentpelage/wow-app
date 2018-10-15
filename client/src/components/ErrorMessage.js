import React from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

import { global } from "../styles/theme/globalStyle";

const WrapperErrorMessage = styled.div`
  z-index: 3;
  position: fixed;
  bottom: 100px;
  right: 0;
  overflow: hidden;
  &.error-transition-enter {
    /* opacity: 0.01; */
    transform: translateX(50%);
  }
  &.error-transition-enter-active {
    /* opacity: 1; */
    transform: translateX(0%);
    transition: all 400ms ease-out;
  }
  &.error-transition-exit {
    /* opacity: 1; */
    transform: translateX(0%);
  }
  &.error-transition-exit-active {
    /* opacity: 0.01; */
    transform: translateX(100%);
    transition: all 400ms ease-out;
  }
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
  border-top-left-radius: ${global.borderRadius};
  border-bottom-left-radius: ${global.borderRadius};
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
  &:focus {
    outline: none;
  }
`;

const ErrorMessage = ({ isErrorDisplay, toggleErrorDisplay, children }) => {
  return (
    <CSSTransition
      in={isErrorDisplay}
      timeout={300}
      classNames="error-transition"
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {state => (
        <WrapperErrorMessage>
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
      )}
    </CSSTransition>
  );
};

export default ErrorMessage;
