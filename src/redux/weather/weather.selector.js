import { createSelector } from "reselect"

const weatherSelect = state => state.weather

export const currentWaetherSelector = createSelector([weatherSelect], (weather) => weather.currerntWeather ? weather.currerntWeather.current : null)
export const currentForecast = createSelector([weatherSelect], (weather) => weather.currerntWeather ? weather.currerntWeather.forecast.forecastday : null)
export const isLoadingCheck = createSelector([weatherSelect], (weather) => weather.loading)