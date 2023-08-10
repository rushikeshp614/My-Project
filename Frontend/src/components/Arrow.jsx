import React from "react"


function Arrow(props){
    return(
        <div className={props.className} onClick={props.onClick}></div>
    )
}

export default Arrow