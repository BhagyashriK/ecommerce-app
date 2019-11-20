import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./header.style";

/**
 * Return header wrapped in style
 */

const Header = ({ children }) => {
  return (
    <Wrapper>
      <div>{children}</div>
    </Wrapper>
  );
};

Header.propTypes = {
  children: PropTypes.node
};

export default Header;
