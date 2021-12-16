import React, { Component } from 'react'
import VideoPlayer from  "react-video-js-player";
import dj from "./gallery/dj.mp4";
import grenade from "./gallery/grenade.mp4";
import ns from "./gallery/ns.mp4";
import over from "./gallery/over.mp4";
import sniper from "./gallery/sniper.mp4";





const Highlights = () => {
    const videoSrc = dj;
    const poster = "";


    const video2 = grenade;
    const poster2 = "";

    const video3 = ns;
    const poster3 = "";

    const video4 = over;
    const poster4 = "";
 
    const video5 = sniper;
    const poster5 = "";


    return (
        <div className="App">
            <h1>Game Highlights</h1>

            <h5>X-Ray Vision</h5>
            <VideoPlayer src={videoSrc} 
            poster={poster} 
            width="520" height="420" />
            <br/>


            <h5>Baseball Practice</h5>
            <VideoPlayer src={video2} 
            poster={poster2} 
            width="520" height="420" />
            <br/>



            <h5>No Scope</h5>
            <VideoPlayer src={video3} 
            poster={poster3} 
            width="520" height="420" />
            <br/>



            <h5>Not extermination unfortunately</h5>
            <VideoPlayer src={video4} 
            poster={poster4} 
            width="520" height="420" />
            <br/>



            <h5>Sniper</h5>
            <VideoPlayer src={video5} 
            poster={poster5} 
            width="520" height="420" />
            <br/>


        </div>
    )

};
export default Highlights;

