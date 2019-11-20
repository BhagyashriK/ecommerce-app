import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./message.style";

/** Message component
 * type: message type, can be info, error
 */

const Message = ({ message, type = "info" }) => {
  return <Wrapper type={type}>{message}</Wrapper>;
};

Message.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string
};

export default Message;
