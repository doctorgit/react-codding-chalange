import styled from "styled-components";

import {
    colors,
    boxShadow
} from "./constants/colors";

export const StyledSubHeader = styled.div`
  height: 50px;
  display: flex;
  background-color: ${colors.darkGrey};
  ${boxShadow.dark};
  font-size: 14px;
  padding: 0 100px;
  line-height: 50px;
  color:${colors.light}
`;
