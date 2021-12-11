import React, { Component } from 'react'
import VideoPlayer from  "react-video-js-player";
import dj from "./gallery/dj.mp4";





const Highlights = () => {
    const videoSrc = dj;
    const poster = "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80";


    return (
        <div className="App">
            <h1>Highlights</h1>
            <VideoPlayer src={videoSrc} poster={poster} width="720" height="420" />
        </div>
    )

};
export default Highlights;
/*
export default class Highlights extends Component {
    render() {
        return (
            <div>
                <h2>Highlights!</h2>
                <small>Time for the highlights videos</small>
            </div>
        )
    }
}*/
