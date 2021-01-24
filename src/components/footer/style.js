// @flow
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Footer = styled("footer")`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.footer} 0;
  ${({ isOpen }) => (isOpen ? footerPopover : "")};

  & .footer {
    &__container {
      display: grid;
      grid-auto-flow: column;
      grid-gap: ${(props) => props.theme.spacing.small};
      margin-block: inherit;
      list-style-type: inherit;
      padding-left: inherit;

      & li {
        display: inherit;
      }
    }
    &__image {
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

export default Footer;
