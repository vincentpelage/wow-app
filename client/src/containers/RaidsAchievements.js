import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import * as actions from "../actions/raidsAchievements/raidsAchievements";

import RaidsAchievements from "../views/raids/RaidsAchievements";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(RaidsAchievements)
);
