import React from "react";
import { Link } from "react-router-dom";

function SignUpSuccessful() {
    return (
      
            <div className="popup">
                <div className="popup-content">
                    <h2>Thank you</h2>
                    <img src="../public/images/check.png" alt="" />
                    <p>You have been successfully signed up.</p>
                    <Link to="/login">
                        <button>Back to Login Page</button>
                    </Link>
                </div>
            </div>

    );
}

export default SignUpSuccessful;
