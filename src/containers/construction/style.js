// @flow
import styled from "@emotion/styled";

const Homepage = styled("div")`
  color: ${({ theme }) => theme.color.primaryText};
  font-family: ${({ theme }) => theme.font.header};
  font-size: ${({ theme }) => theme.fontSize.display};
`;

export default Homepage;
