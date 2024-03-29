import React from 'react';
import {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingInProgress,
    getUsers
} from "../../redux/users-reducer";
import {connect} from 'react-redux';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Dialogs from "../Dialogs/Dialogs";
import {compose} from "redux";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage} onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        //toggleFollowingInProgress: state.usersPage.toggleFollowingInProgress,
        followingInProgress: state.usersPage.followingInProgress,

    }
}

//let AuthRedirectComponent = withAuthRedirect(UsersContainer)
compose(
    connect(mapStateToProps,
        {follow,
            unfollow,
            getUsers,
            setCurrentPage,
            toggleFollowingInProgress,

        }),
    withAuthRedirect
)(UsersContainer)

export default compose(
    connect(mapStateToProps,
        {follow,
            unfollow,
            getUsers,
            setCurrentPage,
            toggleFollowingInProgress,

        }),
    //withAuthRedirect
)(UsersContainer)


