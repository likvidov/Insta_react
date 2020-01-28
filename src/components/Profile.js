import React from 'react';
import User from './User';
import Pallete from './Pallete';

const Profile = () => {
    return (
        <div className="container profile">
            <User src="https://pbs.twimg.com/profile_images/446086391500640256/5J6W99Xm.jpeg" 
                  alt="man" 
                  name="Scott" />
                
            <Pallete />>
        </div>
    )
}

export default Profile;