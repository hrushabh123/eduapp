import React from "react";
import cplusplus from './images/c++.jpg'; 
import python from './images/python.jpg'; 
import java from './images/java.jpg'; 

const Courses = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <img src={cplusplus} alt="Loading.." width="300px" height="250px" />
                            <div className="card-body">
                                <h1 className="card-title">C++</h1>
                                <p>Enhance your skills with C++</p>
                                <h4 className="card-text">₹5000</h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card">
                            <img src={java} alt="Loading.." width="300px" height="250px" />
                            <div className="card-body">
                                <h1 className="card-title">Java</h1>
                                <p>Upskill your knowledge with the most demanding language</p>
                                <h4 className="card-text">₹3999</h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card">
                            <img src={python} alt="Loading.." width="300px" height="250px" />
                            <div className="card-body">
                                <h1 className="card-title">Python</h1>
                                <p>Wanna master AI? Learn Python</p>
                                <h4 className="card-text">₹5000</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Courses;
