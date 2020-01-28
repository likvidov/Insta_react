import React, { Component } from 'react';
import User from './User';

export default class Post extends Component{
    render() {
        return(
            <div className="post">
                <User src="https://pbs.twimg.com/profile_images/446086391500640256/5J6W99Xm.jpeg" alt="man" name="Scott" min/>
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some account
                </div>

                <div className="post__descr">
                    some accountsome accountsome accountsome accountsome accountsome accountsome accountsome accountsome accountsome accountsome accountsome accountsome accountsome accountsome accountsome accountsome account
                </div>
            </div>
        )
    }
}