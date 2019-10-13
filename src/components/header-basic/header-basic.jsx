import React from "react";

import { StyledHeader } from '../../styled/Header';
import { Link } from '../../styled/Link';

const HeaderBasic = () => {
  return (
    <StyledHeader>
        <h1>Titile</h1>
        <Link style={{ cursor: 'default' }} to="#" onClick={() => {}} >
            Log in{" "}
        </Link>
    </StyledHeader>
  );
};

export default HeaderBasic;
