import { CircularProgress, Grid } from '@mui/material'
import React from 'react'



const Spinner = () => (
    <div className="withSpinner">
        <Grid container sx={{ minHeight: "100vh" }} direction={"column"} justifyContent={"center"} alignItems={"center"}>
            <Grid item xs="12">
                <CircularProgress color="secondary"></CircularProgress>
            </Grid>
        </Grid>
        {/* <CircularProgress color="secondary"></CircularProgress> */}
    </div>
)
const WithSpinner = (WrappedCompoonent) => ({ isLoading, children, ...props }) => {
    return isLoading ? <Spinner></Spinner> : <WrappedCompoonent {...props} >{children}</WrappedCompoonent>
}

export default WithSpinner
