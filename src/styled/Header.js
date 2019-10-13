import styled from "styled-components";

import {
    colors,
    boxShadow,
    background
} from "./constants/colors";

export const StyledHeader = styled.div`
  height: 60px;
  line-height: 60px;
  padding: 0 100px;
  display: flex;
  background-color: ${colors.lightBlue};
  ${boxShadow.dark};
  justify-content: space-between;
  font-size: 14px;
  color:${colors.light};
  ${background.blue}
`;


