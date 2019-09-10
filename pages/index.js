import Layout from '../components/Layout'
import React, { useState, useEffect } from "react";
var Home;

export default Home = (props) => {
    useEffect(()=> {
        document.querySelector("body").classList.add('cover');
        document.querySelector("body").classList.add('withBackground');

        return function cleanup(){
            document.querySelector("body").classList.remove('cover');
            document.querySelector("body").classList.remove('withBackground');
        };
    })

    return (
    <Layout currentPage="/" showBackground="true">
	    <div>
            <p>&nbsp;</p>
            <h1 className="cover-heading" stylename={{fontSize: '8vh'}}>I am Scott Harvey...</h1>
            <h1 className="cover-heading" stylename={{fontSize: '8vh'}}>Full Stack Developer.</h1>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p className="lead" stylename={{fontSize: '2vh'}}>I am a Full Stack Developer with over 15 years of experience. Recently, I took about a year off of work to refresh, travel (I took the background picture in Nepal...  Namaste), and re-tool.</p>
            <p className="lead" stylename={{fontSize: '2vh'}}>I will very shortly be completing a Full Stack Web Developer bootcamp (MERN stack). Additionally, I'm well versed in a nameless software stack that not many people find sexy anymore - Windows, Adobe ColdFusion, MS SQL Server, and IIS.</p>
            <p className="lead" stylename={{fontSize: '2vh'}}>Please <a href="./contact">reach out</a> if you have a project or position that I would be a <a href="./skills">good fit</a> for!</p>
            <p className="lead" stylename={{fontSize: '2vh'}}></p>
            <p className="mastfoot mt-auto lead">
            <a href="/about" className="btn btn-lg btn-secondary">More About Me</a>
            </p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
        </div>
  	</Layout>)
}