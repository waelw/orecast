import React from "react"
import { connect } from "react-redux"
import { useNavigate } from "react-router"
import { Button, Grid, TextField } from "@mui/material"
import CButton from "../../components/button/button.component"
import FInput from "../../components/inputField/formInput.component"
import { locationUpdate } from "../../redux/location/location.action"
var location = null

function handleChange(e) {
    location = e.target.value
}

const LocationSet = ({ updateLocation }) => {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        updateLocation(location)
        navigate("/weather")
    }
    return (
        // <div className="locationSet">
        //     <form className="locationForm" onSubmit={handleSubmit} >
        //         <FInput placeholder="Location" handleChange={handleChange} type="text" name="name"></FInput>
        //         <div className="buttonGroup">
        //             <CButton className="btn" type="submit"  >Click</CButton>
        //             <CButton className="btn" type="submit" inverted >Mark Me</CButton>
        //         </div>
        //     </form>
        // </div >

        <>
            <Grid container direction={"column"} sx={{ minHeight: "100vh" }} justifyContent={"center"} alignContent={"center"}>

                <Grid item xs="12" >
                    <TextField
                        inputProps={{
                            color: "white"
                        }}
                        onSubmit={handleSubmit}
                        onChange={handleChange}
                        sx={{ width: "25vw" }}
                        autoComplete="off"
                        color="secondary"
                        variant="outlined"
                        id="Location"
                        label="Location"
                    ></TextField>
                </Grid>
                <Grid sx={{ marginTop: "30px" }} item justifyContent={"center"} alignContent={"center"}>
                    <Grid container justifyContent={"center"} alignContent={"center"} direction={"column"}>
                        <Grid item xs="12">
                            <Button color="secondary" variant="contained" onClick={handleSubmit}>
                                IS It Rainng ?
                            </Button>
                        </Grid>
                    </Grid>

                </Grid>

            </Grid>
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    updateLocation: location => dispatch(locationUpdate(location))
})

export default connect(null, mapDispatchToProps)(LocationSet)