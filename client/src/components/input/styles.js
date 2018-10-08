import { css } from "styled-components";

export const getInputStyles = props => {
  /**
   * Define dynamic variable styles
   */
  let cursor = "text";
  // Use box-shadow with inset instead of border to avoid animation jerk.
  let width = "";

  /**
   * Component state modifiers
   */
  // if (props.isFocus) {
  //   borderWidth = "2px";
  // }

  if (props.disabled) {
    cursor = "not-allowed";
  }

  if (props.fullWidth) {
    width = "100%";
  }

  return css`
    background: #fff;
    cursor: ${cursor};
    box-sizing: border-box;
    display: inline-flex;
    flex: 1 0 auto;
    width: ${width};
    height: 2.5em;
    max-width: 100%;
    padding: 0 8px;
    align-items: center;
    border-radius: 4px;
    line-height: 1.42857;
    word-wrap: break-word;
    font-size: 14px;
    outline: none;
    transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    transition-delay: 50ms;
  `;
};

/**
 * Get the styles for the input inner component
 */
export const getInnerStyle = props => {
  // Stop autofills from making everything look bad.
  return css`
    color: inherit;
    &:-webkit-autofill {
      box-shadow: 0 0 0 30px #fff inset;
    }

    &::placeholder {
        font-size: 
        font-family: Roboto, "Helvetica Neue", Arial, sans-serif;
    }
  `;
};
