import React from "react";
import { connect } from "react-redux";

import {
  actions as configActions,
} from "store/config";

import config from "../config";

class RouteHandler extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.setConfig();
    // load stuff
  }

  componentWillReceiveProps(props) {
    // route changed
  }

  render() {
    return null;
  }
}

const mapState = state => ({
  path: state.router.location.pathname,
});

const mapDispatch = dispatch => ({
  setConfig: () => dispatch(configActions.setConfig(config)),
});

export default connect(mapState, mapDispatch)(RouteHandler);
