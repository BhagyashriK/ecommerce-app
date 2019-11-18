import React from "react";

import { Wrapper } from "./message.style";

/** Message component
 * type: message type, can be info, error
 */

const Message = ({ message, type = "info" }) => {
  return <Wrapper type={type}>{message}</Wrapper>;
};

export default Message;
