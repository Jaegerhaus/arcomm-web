import PropTypes from "prop-types";

const injectServices = Component => {
  Component.contextTypes = { services: PropTypes.object };
  return Component;
};

export default injectServices;
