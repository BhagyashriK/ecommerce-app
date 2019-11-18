import React from "react";
import { Wrapper, LoadingIcon } from "./loader.style";

/**
 * Animated loader component
 */

const Loader = () => {
  return (
    <Wrapper>
      <LoadingIcon />
      Loading...
    </Wrapper>
  );
};

export default Loader;
