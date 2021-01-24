// @flow
import styled from "@emotion/styled";

const About = styled("main")`
  font-family: ${({ theme }) => theme.font.header};
  color: ${({ theme }) => theme.color.primaryText};

  & .about {
    &__text-container {
      font-size: ${({ theme }) => theme.fontSize.subtitle};
    }
    &__highlights {
      color: ${({ theme }) => theme.color.highlightText};
      :hover {
        text-decoration: underline;
      }
    }
    &__grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: ${({ theme }) => theme.spacing.medium};
    }
    &__image {
      max-width: 100%;
      max-height: 425px;
      align-self: center;
      filter: grayscale(60%);
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    & .about {
      &__grid {
        grid-template-columns: 1fr;
      }
      &__image {
        max-height: inherit;
      }
    }
  }
`;

export default About;
