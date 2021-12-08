import React, { Component } from 'react';
import Alex from './gallery/Alex.jpg';
import { useSpring, animated, useTransition } from 'react-spring';






export default class Home extends Component {
    render() {
        return (
            <div>
                
                <h1>Alexjandro Mendoza</h1>
                <img src={Alex} alt="Alex image" height={350} width={350}/>
                <p>Still developing and improving this site</p>


            </div>
        )
    }
}

/* */