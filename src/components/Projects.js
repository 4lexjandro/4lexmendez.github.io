import React, { Component } from 'react';
import calc from './gallery/calc.jpg';
import designPad from './gallery/designPad.jpg';
import favLinks from './gallery/favLinks.jpg';








export default class Projects extends Component {
    render() {
        return (
            <div>
               <h2> Projects incoming</h2>

               <img src={calc} alt="calc image" height={350} width={350}/>
               <p></p>
               <img src={designPad} alt="designPad image" height={350} width={350}/>
               <p></p>
               <img src={favLinks} alt="favLinks image" height={350} width={350}/>
               <p></p>











                
            </div>
        )
    }
}
