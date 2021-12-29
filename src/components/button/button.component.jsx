import React from "react"
import "./button.style.scss"
const CButton = ({ children, inverted, className, ...otherProps }) => (


    <div className={className} >
        <button className={`customButton ${inverted ? "inverted" : ""}`} {...otherProps}>
            {children}
            {console.log(inverted)}
        </button>
    </div >

)

export default CButton