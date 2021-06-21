import React from "react";
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import { withRouter, Redirect } from 'react-router-dom';
import {UsersAPI} from "../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {userId = 16818;}
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);


    }

    render () {
        return <div>
            <Profile {...this.props} profile={this.props.profile} />
        </div>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps,
        {getUserProfile}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)