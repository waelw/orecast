import React from 'react'
import { Typography } from '@mui/material'
import "./banner.style.scss"
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { currentLocationselector } from '../../redux/location/location.selector'

function Banner({ children, location }) {

    const today = new Date()
    const month = today.toLocaleDateString('default', { month: "long" })
    const day = today.toLocaleDateString('default', { weekday: "short" })

    return (
        <div>
            <Typography variant="h3"

                color="textSecondary"
            >
                {`${day} ${today.getDate()}`}
            </Typography>

            <Typography variant="h3"
                paddingBottom="100px"
                color="textSecondary"
            >
                {`${month}`}
            </Typography>
            <Typography variant="h3"
                paddingBottom="7px"
                sx={{ textTransform: "capitalize" }}
            >
                {`${location}`}
            </Typography>
        </div>

    )
}


const mapStateToProps = createStructuredSelector({
    location: currentLocationselector
})
export default connect(mapStateToProps)(Banner)
