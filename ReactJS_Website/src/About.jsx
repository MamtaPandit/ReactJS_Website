import React from "react"
import web from "../src/Images/home.svg"
import Common from "./Common"  
//test
const About = () =>{
    return (
        <>
            <Common name="Welcome to About page" imgsrc={web} visit="/contact" btnname="Let's Collaborate" />
        </>
    )
}

export default About;
