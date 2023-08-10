import React from "react"

function ExerciseButton(props){

    




    return(
        
        <button href={props.href} className={props.btnClassName} onClick={props.onClick}>{props.btnValue}</button>
    )
}

export default ExerciseButton