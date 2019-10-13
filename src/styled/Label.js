import styled from "styled-components";

import {
    colors
} from "./constants/colors";

export const Label = styled.div`
        color: ${colors.black};
        font-size: 12px;
        padding: 5px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
        overflow: hidden;
`;