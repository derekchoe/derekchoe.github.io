// @flow
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const NavLinkContainer = styled("ul")`
  display: inherit;
  & ul {
    margin-block: inherit;
    list-style-type: inherit;
    padding-inline-start: inherit;
  }
  & .nav-link-container {
    &__link {
      display: inherit;
      font-family: ${({ theme }) => theme.font.header};
      font-size: ${({ theme }) => theme.fontSize.title};
      padding: 0 ${({ theme }) => theme.spacing.medium};
      transition: all 0.2s ease-in-out;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: none;
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

export default NavLinkContainer;
