import React from "react"
import "./formInput.style.scss"


const FInput = ({ label, handleChange, ...otherprops }) => (

    <div className="input-group">
        {
            label ? <label>{label}</label> : null
        }
        <input autoComplete="off" className="input" onChange={handleChange} {...otherprops} ></input>
    </div>
)

export default FInput