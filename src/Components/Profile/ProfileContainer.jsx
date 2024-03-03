import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {useParams} from "react-router-dom";
import {setUserProfile} from "../../redux/profile-reducer";
import { profileAPI } from '../../api/api';




function ProfileContainer(props) {
    let { userId } = useParams();
    if (!userId) {
        userId = 8;
    }

    useEffect(() => {
        profileAPI.getprofile(userId).then((data) => {
                props.setUserProfile(data);
            });
    }, [userId]);

    return (
        <div>
            <Profile profile={props.profile} />
        </div>
    );
}

let mapStateToProps = (state)=> ({
    profile: state.profilePage.profile
})

export default connect (mapStateToProps, {setUserProfile})(ProfileContainer)