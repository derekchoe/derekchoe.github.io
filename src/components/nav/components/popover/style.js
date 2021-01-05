// @flow
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Popover = styled("div")`
  position: absolute;
  top: 80px;
  height: 100vh;
  width: 100%;

  & .popover {
    &__container {
      margin-block: inherit;
      list-style-type: inherit;
      padding-inline-start: inherit;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      animation: 1s fade;
      padding-top: ${({ theme }) => theme.spacing.huge};
    }

    &__link-wrapper {
      display: inherit;
      cursor: pointer;
      padding: ${({ theme }) => theme.spacing.small} 0;
      transition: opacity 0.2s ease-in-out;
      font-family: ${(props) => props.theme.font.header};
      font-size: ${({ theme }) => theme.fontSize.headline};
    }
  }

  @media (min-width: ${({ theme }) => theme.media.mobile}) {
    & .popover {
      &__container {
        display: none;
      }
    }
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme, selected }) =>
    selected ? theme.color.highlightText : theme.color.primaryText};
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    color: ${({ theme }) => theme.color.highlightText};
    transition: all 0.2s ease;
  }
`;

export default Popover;
