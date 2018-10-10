import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import App from "../App";


const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(dispatch)
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(App)
);
