import React from "react"






// const NextSampleButton = (props) => {
//     return (
//         <div>
//             <button className={props.classNameNext} onClick={props.onClickQuestion}>Next</button>
//             <button className={props.classNameSample} onClick={props.onClickSample}>Sample Solution</button>
//         </div>
//     )
// }

function handleSolution(){
//     $("#solution").removeAttr("display")
}


function NextSampleButton({ classNameNext, classNameSample, onClickQuestion, onClickSample }) {
    return (
      <div className="sampleQuestionContainer">
        <button className={classNameNext} onClick={onClickQuestion}>
          Next Question
        </button>
        {/* <button className={classNameSample} onClick={handleSolution}>
          Sample Solution
        </button> */}
      </div>
    );
  }

export default NextSampleButton