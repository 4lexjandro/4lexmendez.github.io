import React, { Component } from 'react';
import calc from './gallery/calc.jpg';
import designPad from './gallery/designPad.jpg';
import favLinks from './gallery/favLinks.jpg';
import house from './gallery/house.jpg';


export default class Projects extends Component {
    render() {
        return (
            <div>
               <h2> Projects incoming</h2>

                <h4>The Calculator</h4>
               <small>In this project, I used javascript, css, and html to create a functional calculator. 
                   <br/>It works for any basic calculations
                   so do not attempt to use it for any advanced calculations or you'll be dissappointed....BUT BETTER CALCULATOR COMING SOON!
               </small>
               <br/>
               <a href="https://github.com/4lexmendez/Calculator">Check it out !</a>
               <br/>
               <img src={calc} alt="calc image" height={250} width={350}/>
               <h4>Drag & Drop</h4>
               <small>Here is a grey pad that was a collaboration with genius classmates where the user
                   is able to drag and drop colors onto the 4 squares to change their color once you cllick the edit button. Eventually,
                   <br/> I'll attempt to force the colors to change colors and rotate on their own with a timer.
               </small>
               <br/>
               <a href="https://github.com/j-reyes314/design-pad">Check it out !</a>
               <br/>
               <img src={designPad} alt="designPad image" height={250} width={350}/>
               <br/>
               <h4>Favorite Links</h4>
               <small>This is a minor project where the user is able to add and delete links. The gist of it was to understand props</small>
               <br/>
               <a href="https://github.com/4lexmendez/favoriteLinks">Check it out !</a>
               <br/>
               <img src={favLinks} alt="favLinks image" height={250} width={350}/>
               <br/>
            <h4>Real Estate website</h4>
            <small>This is a project that I created but not on my own at all. There was a udemy course teaching Django and python fundamentals.
                <br/> it uses postgres as a database and functions except for one page. This is an old project that I have not gotten the chance
                <br/> to deploy or complete but  will once this semester is done.
            </small>
               <br/>
               <a href="https://github.com/4lexmendez/RealEstate">Check it out !</a>
               <br/>
               <img src={house} alt="house image" height={250} width={350}/>
               <br/>











                
            </div>
        )
    }
}
