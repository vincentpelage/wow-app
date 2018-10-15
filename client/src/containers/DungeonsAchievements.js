import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import * as actions from "../actions/dungeonsAchievements/dungeonsAchievements";
import { getRaidsAchievements } from "../actions/raidsAchievements/raidsAchievements";

import DungeonAchievements from "../views/dungeons/DungeonsAchievements";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
  getRaidsAchievements: bindActionCreators(getRaidsAchievements, dispatch)
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DungeonAchievements)
);
