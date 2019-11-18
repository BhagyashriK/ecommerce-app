import React from "react";
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

export default Header;
