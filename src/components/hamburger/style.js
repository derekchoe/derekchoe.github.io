// @flow
import styled from "@emotion/styled";

const Hamburger = styled("div")`
  & .hamburger {
    &__menu-button {
      height: 32px;
      width: 32px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    &__line {
      height: 4px;
      width: 40px;
      background: ${({ theme }) => theme.color.primaryText};
      transition: all 0.2s ease;
      border-radius: ${({ theme }) => theme.radius.rounded};
      animation: 0.5s shrink forwards;
    }
    &__line-first {
      margin-bottom: ${({ theme }) => theme.spacing.tiny};
      transform: ${({ isOpen }) =>
        isOpen ? "translateY(10px) rotate(45deg)" : ""};
    }
    &__line-second {
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
      transform: ${({ isOpen }) => (isOpen ? "translate(-16px)" : "")};
    }
    &__line-third {
      margin-top: ${({ theme }) => theme.spacing.tiny};
      transform: ${({ isOpen }) =>
        isOpen ? "translateY(-10px) rotate(-45deg)" : ""};
    }
  }
  @keyframes shrink {
    0% {
      width: 95%;
    }
    100% {
      width: 90%;
    }
  }
  @media (min-width: ${({ theme }) => theme.media.mobile}) {
    display: none;
  }
`;

export default Hamburger;
