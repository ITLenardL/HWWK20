import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const mainPage = () => {
    return (
    <div className="aboutApp">
    <div className="container">
    <div className="card">
        <div className="card-header">
        <h3>About Me</h3>
        </div>
        <div className="card-body">
        <blockquote className="blockquote mb-0">
        <div className="row">
        <div className="col-md-3">
        <img id="pic" src="https://avatars0.githubusercontent.com/u/73584919?v=4" alt="profile pic" width="100%" height="auto%" />
        </div>
        <div className="col-md-8">
        <p>My name is Lenard Laska. I am based in Melbourne, Australia and am presently participating in Monash Coding Bootcamp for full stack web development. </p>
        
        <p>My work history is spread across multiple fields from many different industries, from managing a car workshop, to working in banqueting at Intercontinental Hotel Rialto, to at present being a customer service and security liason for Melbourne University. I have worked in many different fields and mainly based around a customer service aspect. </p>
        
        <p>I aim to gain employment with a web development company that can be not just a job, but a place that helps me grow and learn and consolidate my skills.</p>
        
        <p>During my free time I enjoy sports, mainly basketball, watching the NBA and combat sports, spending time with my young family, and reading and self-development.</p>
        </div>
        </div>
        </blockquote>
    </div>
    </div>
    </div>
    </div>
)
}
export default mainPage