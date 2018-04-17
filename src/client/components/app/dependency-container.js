import React from "react";
import PropTypes from "prop-types";

class DependencyContainer extends React.Component {

  // ChildContext as a dependency container
  static childContextTypes = {
    services: PropTypes.object
  };

  getChildContext() {
    return {
      services: this.props.services
    };
  }

  render() {
    return this.props.children;
  }
}

export default DependencyContainer;
