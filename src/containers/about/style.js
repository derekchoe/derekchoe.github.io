// @flow
import styled from "@emotion/styled";

const About = styled("div")`
  font-family: ${({ theme }) => theme.font.header};
  color: ${({ theme }) => theme.color.primaryText};

  & .about {
    &__text {
      color: ${({ theme }) => theme.color.secondaryText};
    }
  }
`;

export default About;
