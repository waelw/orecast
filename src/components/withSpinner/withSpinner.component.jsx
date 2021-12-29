import { CircularProgress } from '@mui/material'
import "./withspinner.style.scss"
import React from 'react'



const Spinner = () => (
    <div className="withSpinner">
        <CircularProgress></CircularProgress>
    </div>
)
const WithSpinner = (WrappedCompoonent) => ({ isLoading, children, ...props }) => {
    return isLoading ? <Spinner></Spinner> : <WrappedCompoonent {...props} >{children}</WrappedCompoonent>
}

export default WithSpinner
