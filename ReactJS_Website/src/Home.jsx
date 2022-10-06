import React from "react"
import web from "../src/Images/home.svg"
import {NavLink} from "react-router-dom"
import Common from "./Common"

const Home = () =>{
    return (
        <>
            <Common name="Grow your business with" imgsrc={web} visit="/service" btnname="Get Started"/>
        </>
    )
}

export default Home;