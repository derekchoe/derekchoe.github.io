// @flow
import styled from "@emotion/styled";

const Nav = styled("div")`
  color: ${({ theme }) => theme.color.primaryText};
  position: relative;
  & .nav {
    &__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 75px;
      max-width: ${({ theme }) => theme.maxWidth.max};
      margin: 0 auto;
      padding: ${(props) => props.theme.spacing.medium} 0;
    }
    &__profile {
      width: 75px;
      height: 75px;
      transition: all 0.2s ease-in-out;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  @keyframes slideIn {
    0% {
      transform: translateY(2%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export default Nav;
