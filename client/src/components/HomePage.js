import React, { Component } from "react";
import Body from "./Body";
import Header from "./Header";

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Body />
                <Header />
            </div>
        );
    }
}