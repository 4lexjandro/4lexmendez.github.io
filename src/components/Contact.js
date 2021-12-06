import React, { Component } from 'react';
import {useForm} from "react-hook-form";

export default class Contact extends Component {



   /* const {register, handleSubmit, errors} = useForm(); 
    const onSubmit = data =>{console.log(data)};*/

    onButtonClickHandler = () => {
        window.alert("Message received! I'll get back to you when I can! 😁")
      };



    render() {

        return (
            <div>
                <h1>For questions, comments, or concerns</h1>
                <p>Primary #: 914-999-9999
                <br/>
                Email: 4lexmendezz@gmail.com
                </p>
                <h5>Please fill out the form below for me to get back to you</h5>

                <form>
                    <input type="text" placeholder="Full Name" name="name" />
                    <br/>
                    <br/>
                    <input type="text" placeholder="Email" name="email" />
                    <br/>
                    <br/>
                    <input class= "pow" maxlength="125" size="100" type="text" placeholder="Short Message" name="message" />
                    <br/>
                    <br/>
                    <button onClick={this.onButtonClickHandler}>Submit</button>
                    
                
                </form>
    
            </div>

           





        )
    }
}
