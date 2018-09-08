import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import * as actions from "../actions/simpleTool/simpleAction";
// import { simpleAction } from "../actions/simpleAction";
// import { anotherAction } from "../actions/anotherAction";

import App from "../App"

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);