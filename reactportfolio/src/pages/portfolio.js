import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import SS1 from "../img/SS1.png";
import SS2 from "../img/SS2.png";
import SS3 from "../img/SS3.png";
import SS4 from "../img/SS4.png";
import SS5 from "../img/SS5.png";
import SS6 from "../img/SS6.png";
import RESUME from "../img/LLaska RESUME.pdf";



const portfolio = () => {
    return (
        <div className="portfolioApp">
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>Portfolio</h3>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-2"></div>

                            <div className="col-md-4">
                                <p className="card-text">EAT-DA-BURGER APP</p>
                                <a href="https://github.com/ITLenardL/HWWK13-EAT-DA-BURGER" target="_blank" >
                                    <img src={SS1}
                                        className="card-img-top" alt="EAT-DA-BURGER SS" />
                                </a>
                            </div>
                            <div className="col-md-1"></div>

                            <div className="col-md-4">
                                <p className="card-text">Employee Management System</p>
                                <a href="https://github.com/ITLenardL/HWWK12-Employee-Management-System" target="_blank">
                                    <img src={SS2}
                                        className="card-img-top" alt="Employee Management System SS" />
                                </a>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <div className="col-md-2">
                            </div>
                            <div className="col-md-4">
                                <p className="card-text">Note Taker</p>
                                <a href="https://github.com/ITLenardL/HWWK11--Note-Taker" target="_blank">
                                    <img src={SS3}
                                        className="card-img-top" alt="Note Taker SS" />
                                </a>
                            </div>
                            <div className="col-md-1"></div>

                            <div className="col-md-4">
                                <p className="card-text">Team profile generator</p>
                                <a href="https://github.com/ITLenardL/HWWK10--OOP-Team-profile-generator" target="_blank">
                                    <img src={SS4}
                                        className="card-img-top" alt="Team Profile Generator SS" />
                                </a>

                                <div className="col-md-1"></div>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-4">
                                <p className="card-text">Password Generator</p>
                                <a href="https://github.com/ITLenardL/HWWK3" target="_blank">
                                    <img src={SS5}
                                        className="card-img-top" alt="Password-Generator SS" />
                                </a>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-4">
                                <p className="card-text">Project 2: Well Me</p>
                                <a href="https://lkblt-project2.herokuapp.com/" target="_blank">
                                    <img src={SS6}
                                        className="card-img-top" alt="Well Me Project App SS" />
                                </a>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="gitProfile">
                            <p><a href="https://github.com/ITLenardL" target="_blank">Click me for Github Profile!</a></p>
                            <p><a href="https://www.linkedin.com/in/lenard-laska-983702209/" target="_blank">Click me for Linkedin Profile!</a></p>
                            <p><a href={RESUME} target="_blank"> Resume download</a></p>

                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}
export default portfolio