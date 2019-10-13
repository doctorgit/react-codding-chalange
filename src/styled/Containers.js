import styled from "styled-components";
import { colors } from "./constants/colors";

const paddingLeftRight = 'padding: 0 100px;';

export const PageContainer = styled.div`    
    overflow: auto;
    width: 100%;
    flex-grow: 1;
    ${paddingLeftRight}
    padding-top: 40px;
    display: flex;
    height: calc(100vh - 306px);
    flex-wrap: wrap;
    margin-left: -20px;
`;

export const Container = styled.div`
  overflow: auto;
  height: 100%
  width: 100%;
  ${paddingLeftRight}
`;

export const EntityContainer = styled.div`
    margin-top: 30px;
    flex-direction: row;
    height: 240px;
    width: 160px;
    margin-left: 20px;
`;

export const ImageContainer = styled.div`
${props =>`
    text-align: center;
    line-height: 240px;
    margin-top: 20px;
    flex-direction: row;
    height: 240px;
    width: 160px;
    color: ${colors.light};
    ${ props.url ? `background: no-repeat url("${props.url}");
    background-size: cover;` : `background-color: ${colors.darkGrey}`}
`};
`;