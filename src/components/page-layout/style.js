// @flow
import styled from "@emotion/styled";

const PageLayout = styled("div")`
  height: 100vh;
  background: ${({ theme, isOpen }) =>
    isOpen ? theme.color.popoverBack : theme.color.primary};
  padding: 0 ${({ theme }) => theme.spacing.medium};
  overflow-y: hidden;

  & .page-layout {
    &__container {
      max-width: ${({ theme }) => theme.maxWidth.max};
      margin: 0 auto;
    }
  }
`;

export default PageLayout;
