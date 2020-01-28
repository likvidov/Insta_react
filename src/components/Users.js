import React from 'react';
import User from './User';

export default function Users(){
    return(
        <div className="right">
            <User src="https://pbs.twimg.com/profile_images/446086391500640256/5J6W99Xm.jpeg" alt="man" name="Scott"/>
            <div className="users__block">
                <User src="https://pbs.twimg.com/profile_images/446086391500640256/5J6W99Xm.jpeg" alt="man" name="Scott" min/>
                <User src="https://pbs.twimg.com/profile_images/446086391500640256/5J6W99Xm.jpeg" alt="man" name="Scott" min/>
                <User src="https://pbs.twimg.com/profile_images/446086391500640256/5J6W99Xm.jpeg" alt="man" name="Scott" min/>
                <User src="https://pbs.twimg.com/profile_images/446086391500640256/5J6W99Xm.jpeg" alt="man" name="Scott" min/>
            </div>    
        </div>
    )
}