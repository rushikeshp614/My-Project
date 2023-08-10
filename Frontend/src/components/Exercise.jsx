import React from "react";
import { useNavigate } from "react-router-dom";
import ExerciseButton from "./ExerciseButton";


function Exercise(props) {
  
   

  return (
    <div className={props.className}>
      <h2>{props.title}</h2>
      <p>{props.para}</p>
      {/* Call the handleExerciseButtonClick function when the button is clicked */}
      <ExerciseButton
        btnClassName="exerBtn"
        href="#"
        btnValue="Solve Challenges"
        onClick={props.onExerciseButtonClick}
      />
    </div>
  );
}

export default Exercise;
