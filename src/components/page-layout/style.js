// @flow
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const PageLayout = styled("div")`
  height: 100vh;
  background: ${({ theme, isOpen }) =>
    isOpen ? theme.color.popoverBack : theme.color.background};
  padding: 0 ${({ theme }) => theme.spacing.medium};
  overflow-y: ${({ isOpen }) => (isOpen ? "hidden" : "")};

  & .page-layout {
    &__container {
      max-width: ${({ theme }) => theme.maxWidth.max};
      margin: 0 auto;
    }
    &__footer-container {
      display: flex;
      justify-content: center;
      padding: ${({ theme }) => theme.spacing.footer} 0;
      ${({ isOpen }) => (isOpen ? footerPopover : "")};
    }
    &__footer {
      display: grid;
      grid-auto-flow: column;
      grid-gap: ${(props) => props.theme.spacing.small};
      margin-block: inherit;
      list-style-type: inherit;
      padding-inline: inherit;
      animation: 1s fadeIn;

      & li {
        display: inherit;
      }
    }
    &__footer-image {
      height: 30px;
      width: 30px;
      object-fit: contain;
      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

const footerPopover = css`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export default PageLayout;
