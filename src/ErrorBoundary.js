import React from "react";
import { Link } from "@reach/router";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("error caught error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <h1>
          There was an error. <Link to="/">Go back home</Link>
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
