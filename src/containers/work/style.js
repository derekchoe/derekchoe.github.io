// @flow
import styled from "@emotion/styled";

const Work = styled("div")`
  & .work {
    &__header {
      font-family: ${({ theme }) => theme.font.header};
      color: ${({ theme }) => theme.color.primaryText};
    }
  }
`;

export default Work;
