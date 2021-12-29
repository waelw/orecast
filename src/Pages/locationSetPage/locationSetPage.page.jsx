import React from "react"
import { connect } from "react-redux"
import { useNavigate } from "react-router"
import CButton from "../../components/button/button.component"
import FInput from "../../components/inputField/formInput.component"
import { locationUpdate } from "../../redux/location/location.action"
import "./locationSetPage.style.scss"
var location = null

function handleChange(e) {
    location = e.target.value
}

const LocationSet = ({ updateLocation, match }) => {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        updateLocation(location)
        navigate("/weather")
    }
    return (
        <div className="locationSet">
            <form className="locationForm" onSubmit={handleSubmit} >
                <FInput placeholder="Location" handleChange={handleChange} type="text" name="name"></FInput>
                <div className="buttonGroup">
                    <CButton className="btn" type="submit"  >Click</CButton>
                    <CButton className="btn" type="submit" inverted >Mark Me</CButton>
                </div>
            </form>
        </div >
    )
}

const mapDispatchToProps = dispatch => ({
    updateLocation: location => dispatch(locationUpdate(location))
})

export default connect(null, mapDispatchToProps)(LocationSet)