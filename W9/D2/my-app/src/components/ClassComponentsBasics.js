import React, { Component } from "react";
export class ClassComponentsBasics extends Components{
    // 1. class extends React.Component 
    // state, lifecycle methods, props, setState()
    render(){
        //render(): Returns JSX describing what to show
        //called whenever component needs to update
        return(
            <>
            <h2>Class Components</h2>
            <p>Class Components use render() and support lifecycle methods.</p>
            </>
        )
    }
}