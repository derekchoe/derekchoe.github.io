// @flow
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Popover = styled("div")`
  position: absolute;
  top: 80px;
  & .popover {
    &__container {
      margin-block: inherit;
      list-style-type: inherit;
      padding-inline-start: inherit;
      display: flex;
      flex-direction: column;
      padding-top: ${({ theme }) => theme.spacing.huge};
    }

    &__link-wrapper {
      display: inherit;
      cursor: pointer;
      padding: ${({ theme }) => theme.spacing.small} 0;
      font-family: ${(props) => props.theme.font.header};
      font-size: ${({ theme }) => theme.fontSize.headline};
      animation: 1s fade;
    }
  }

  @media (min-width: ${({ theme }) => theme.media.mobile}) {
    & .popover {
      &__container {
        display: none;
      }
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
