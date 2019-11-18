import React, { Component } from "react";
import Message from "../message/message.index";

/**
 * Catchs JS errors and shows fallback message
 */

class ErrorBoundary extends Component {
  state = { error: null, info: null };

  componentDidCatch(error, info) {
    this.setState({ error, info });
  }

  render() {
    if (this.state.info) {
      return <Message message="Oops, something went wrong!" type="error" />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
