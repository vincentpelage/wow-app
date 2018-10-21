import ReactSelect from "react-select";
import styled from "styled-components";
import { global } from "../../styles/theme/globalStyle";

export const StylingSelect = styled(ReactSelect)`
  &.select-kingdom .react-select__single-value {
    text-transform: capitalize;
  }

  &.select-region .react-select__single-value {
    text-transform: uppercase;
  }

  & .react-select__placeholder,
  & .react-select__menu-list,
  & .react-select__single-value {
    font-family: "Roboto";
    font-weight: 300;
    font-size: 12px;
    @media (min-width: ${global.minTablet}) {
      font-size: 14px;
    }
    @media (min-width: ${global.minDesktop}) {
      font-size: 16px;
    }
  }

  & .react-select__control {
    height: 35px;
    min-height: 35px;
    border: none;
    border-radius: ${global.borderRadius};
  }
  & .react-select__menu-list {
    max-height: 100px;
    @media (min-width: ${global.minTablet}) {
      max-height: 250px;
    }
  }
`;
