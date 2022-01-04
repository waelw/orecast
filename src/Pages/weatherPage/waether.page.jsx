import React, { useEffect } from "react";
import { connect } from "react-redux";
import { currentLocationselector } from "../../redux/location/location.selector";
import { createStructuredSelector } from "reselect";
import { fetchAsync } from "../../redux/weather/weather.action";
import { currentForecast, currentForecastErr, currentWaetherSelector, isLoadingCheck } from "../../redux/weather/weather.selector";
import { Container, Grid, Hidden, } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Details from "../../components/details-section/details.component"
import Hero from "../../components/hero/hero.component"
import CardItem from "../../components/card/card.component";
import WithSpinner from "../../components/withSpinner/withSpinner.component";
import { useNavigate } from "react-router";

const GridWithSpinner = WithSpinner(Grid)
const useStyles = makeStyles({
    customContainer: {
        paddingTop: 100,
    }
})
const WeatherPage = ({ location, fetchStart, forecast, loading, error }) => {


    const navigate = useNavigate()

    const classes = useStyles()
    useEffect(async () => {
        await fetchStart(location)
    }, [])
    if (error) {
        navigate("/")
    }
    forecast = forecast ? [...forecast, ...forecast, forecast[0]] : []
    return (

        <div className="weatherPage">

            <GridWithSpinner isLoading={loading} container>
                <Grid item xs={12} md={8}>
                    <Container maxWidth="md"
                        className={classes.customContainer}
                    >
                        <Details  >

                        </Details>
                        <Grid spacing={0} gap={0} container >
                            {
                                forecast.map((item) => (
                                    <Grid
                                        sx={{ backgroundColor: "inherit", padding: "0px" }}
                                        px="0px"
                                        xs={12 / 7}
                                        item>

                                        <CardItem weather={item} />

                                    </Grid>
                                ))
                            }

                        </Grid>
                    </Container>
                </Grid>
                <Grid item md={4}  >
                    <Hidden mdDown>
                        <Hero />
                    </Hidden>
                </Grid>
            </GridWithSpinner>

        </div>
    )

}

const mapDispacthToProps = dispatch => ({
    fetchStart: location => dispatch(fetchAsync(location))
})
const mapStateToProps = createStructuredSelector({
    location: currentLocationselector,
    weather: currentWaetherSelector,
    forecast: currentForecast,
    loading: isLoadingCheck,
    error: currentForecastErr
})

export default connect(mapStateToProps, mapDispacthToProps)(WeatherPage)