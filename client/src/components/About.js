import React, { Component } from "react";
import { Helmet } from 'react-helmet'

export default class About extends Component {
    render() {
        const theme = {
            color: 'white',
            fontSize: '20px',
            fontFamily: 'ariel thin',
            border: '1px solid white',
            height: '200px',
            width: '70%',
            margin: '250px 15% auto 15%',
            textAlign: 'center',
            paddingTop: '50px'

        };
        return (

            <div>
                <Helmet bodyAttributes={{ style: "background-color: black" }} />
                <div style={theme}>
                    <p>
                        Lea Hughes is an Austin based composer with work featured in various TV/Film projects. She enjoys creating new music and web development.
        </p>
                </div>
            </div>
        );
    }
}




