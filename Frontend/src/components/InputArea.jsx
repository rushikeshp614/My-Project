import React from "react";



function InputArea(props) {
    return (
        <div className="inputContainer">
            <input
                name={props.name}
                type={props.type}
                className={props.className}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}    
                />
            <label className={props.labelClassName}>{props.labelValue}</label>
        </div>
    )
}

export default InputArea