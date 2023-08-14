import React from "react";
import { Link } from "react-router-dom";


function StartPage() {
  return (
    <div className="jumbotron centered">
      <div className="container text-center">
        {/* <i className="fas fa-key fa-6x"></i> */}
        <h1 className="display-3">My App</h1>
        <p className="lead">Welcome to my App!</p>
        <hr></hr>
        <Link to="/login" >
          <button className="btn btn-light btn-lg">Login</button>
        </Link>

        <Link to="/signup">
          <button className="btn btn-dark btn-lg">Sign Up</button>
        </Link>
      </div>

    </div>
  );
}

export default StartPage;
