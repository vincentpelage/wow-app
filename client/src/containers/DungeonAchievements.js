import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import * as actions from "../actions/dungeonsAchievementsTool/dungeonAchievementsAction";

import DungeonAchievements from "../views/DungeonAchievements";


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
    )(DungeonAchievements)
);
