// @flow
import styled from "@emotion/styled";

const PageLayout = styled("div")`
  height: ${({ isOpen }) => (isOpen ? "100vh" : "inherit")};
  background: ${({ theme, isOpen }) =>
    isOpen ? theme.color.popoverBack : theme.color.background};
  padding: 0 ${({ theme }) => theme.spacing.large};

  & .page-layout {
    &__container {
      max-width: ${({ theme }) => theme.maxWidth.max};
      margin: 0 auto;
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

export default PageLayout;
