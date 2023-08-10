import React from "react"
import LandingPage from "./LandingPage"
import SignUp from "./SignUp"
import Login from "./Login"
import StartPage from "./StartPage"
import HomePage from "./HomePage"
import SignUpSucessful from "./SignUpSuccessful"
import NoPage from "./NoPage"
import CodingScreen from "./CodingScreen"
import { Route, Routes } from 'react-router-dom';





function App() {

    return (

            <Routes>
                <Route exact path="/" element={<StartPage />} />
                <Route path="/landingpage" element={<LandingPage/>}/>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signupsucessful" element={<SignUpSucessful/> }/>
                <Route path="/homepage" element={<HomePage />}/>
                <Route path="/codingscreen" element={<CodingScreen />}/>
                <Route path="*" element={<NoPage />}/>
            </Routes>
    )
}


export default App