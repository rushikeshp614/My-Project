import React, { useState } from "react"
import Exercise from "./Exercise"
import NavBar from "./NavBar"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import CodingScreen from "./CodingScreen";



function HomePage() {
    const [exerciseData, setExerciseData] = useState(null);
    const navigate = useNavigate();

    const handleExerciseButtonClick = (exerciseType) => {
        console.log('Button clicked with exerciseType:', exerciseType);

        // Make a network request to the backend with exerciseType

        axios.get('http://localhost:3000/api/exerciseTemplate', {
            params: {
                exerciseType: exerciseType
            }
        })
            .then((response) => {

                console.log("exerciseData variables:", response.data); 
                setExerciseData(response.data);
                // navigate("/codingscreen");
                navigate("/codingscreen", { state: { exerciseData: response.data } });

            })
            .catch((error) => {
                console.error("Error fetching data from the server:", error);
            });
    };




    return (
        <div className="HomePageBody">
            <NavBar />
            <div className="homeContainer">
                <Exercise
                    className="question"
                    title="Python Loops and Conditional Statements"
                    para="Level-Easy"
                    onExerciseButtonClick={() => handleExerciseButtonClick("loops")}



                />

                <Exercise
                    className="question"
                    title="Python Input Function"
                    para="Level-Easy"
                    onExerciseButtonClick={() => handleExerciseButtonClick("inputOutput")}



                />

                <Exercise
                    className="question"
                    title="Python Functions"
                    para="Level-Easy"
                    onExerciseButtonClick={() => handleExerciseButtonClick("function")}



                />

                <Exercise
                    className="question"
                    title="Python Number/Math"
                    para="Level-Easy"
                    onExerciseButtonClick={() => handleExerciseButtonClick("number")}




                />
                <Exercise
                    className="question"
                    title="Python String"
                    para="Level-Easy"
                    onExerciseButtonClick={() => handleExerciseButtonClick("string")}



                />


                <Exercise
                    className="question"
                    title="Python List"
                    para="Level-Easy"
                    onExerciseButtonClick={() => handleExerciseButtonClick("list")}



                />

                <Exercise
                    className="question"
                    title="Python Dictionary"
                    para="Level-Easy"
                    onExerciseButtonClick={() => handleExerciseButtonClick("dictionary")}


                />

                <Exercise
                    className="question"
                    title="Python Tuple"
                    para="Level-Easy"
                    onExerciseButtonClick={() => handleExerciseButtonClick("tuple")}


                />

                <Exercise
                    className="question"
                    title="Python Set"
                    para="Level-Easy"
                    onExerciseButtonClick={() => handleExerciseButtonClick("set")}
                />

                <Exercise
                    className="question"
                    title="Python OOPS"
                    para="Level-Easy"
                    onExerciseButtonClick={() => handleExerciseButtonClick("oops")}


                />
                <Exercise
                    className="question"
                    title="Python Date and Time"
                    para="Level-Easy"
                    onExerciseButtonClick={() => handleExerciseButtonClick("dateTime")}


                />

                <Exercise
                    className="question"
                    title="Python Searching and Sorting"
                    para="Level-Easy"
                    onExerciseButtonClick={() => handleExerciseButtonClick("searchSort")}


                />



            </div>

        </div>
    )


}

export default HomePage