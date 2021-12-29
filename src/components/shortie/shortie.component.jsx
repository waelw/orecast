import { Grid, Typography } from '@mui/material'
import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { currentWaetherSelector } from '../../redux/weather/weather.selector'
import "./shortie.style.scss"
function Shortie({ weather }) {
    return (
        <Grid container>
            <Grid item xs={6}>
                <Typography variant="h1" color="textPrimary ">
                    {weather ? Math.floor(weather.feelslike_c) : null}°
                </Typography>
            </Grid>
            <Grid item display="flex" alignItems="center" justifyContent="center" xs={6}>
                <div>
                    <img width="100px" height="100px" src={`${weather ? weather.condition.icon : null}`} alt="Weather condition" />
                </div>
            </Grid>
        </Grid>
    )
}
const mapStateToProps = createStructuredSelector({
    weather: currentWaetherSelector
})
export default connect(mapStateToProps)(Shortie)
