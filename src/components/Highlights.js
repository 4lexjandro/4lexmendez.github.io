import React, { Component } from 'react'
import VideoPlayer from  "react-video-js-player";
import dj from "./gallery/dj.mp4";
import grenade from "./gallery/grenade.mp4";
import ns from "./gallery/ns.mp4";
import over from "./gallery/over.mp4";
import sniper from "./gallery/sniper.mp4";
import OVER from './gallery/OVER.jpg';
import GRENADE from './gallery/GRENADE.jpg';
import NOSCOPE from './gallery/NOSCOPE.jpg';




const Highlights = () => {
    const videoSrc = dj;
    const poster = "";


    const video2 = grenade;
    const poster2 = GRENADE;

    const video3 = ns;
    const poster3 = NOSCOPE;

    const video4 = over;
    const poster4 = OVER;
 
    const video5 = sniper;
    const poster5 = "";


    return (
        <div className="App">
            <h1>Game Highlights</h1>
            <VideoPlayer src={videoSrc} 
            poster={poster} 
            width="520" height="420" />


            <h5>Baseball Practice</h5>
            <VideoPlayer src={video2} 
            poster={poster2} 
            width="520" height="420" />



            <h5>No Scope</h5>
            <VideoPlayer src={video3} 
            poster={poster3} 
            width="520" height="420" />



            <h5>Not extermination unfortunately</h5>
            <VideoPlayer src={video4} 
            poster={poster4} 
            width="520" height="420" />



            <h5>Sniper</h5>
            <VideoPlayer src={video5} 
            poster={poster5} 
            width="520" height="420" />


        </div>
    )

};
export default Highlights;

