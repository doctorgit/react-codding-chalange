import styled from "styled-components";
import { NavLink } from "react-router-dom";

import {
    colors
} from "./constants/colors";

export const Link = styled(NavLink)`
        color: ${colors.light};
        text-decoration: none;
        box-sizing: border-box;
        &:hover {
            color: ${colors.light};   
        }
`;