import { createSelector } from "reselect"

const weatherSelect = state => state.weather

export const currentWaetherSelector = createSelector([weatherSelect], (weather) => weather.currerntWeather.current)
export const currentForecast = createSelector([weatherSelect], (weather) => weather.currerntWeather.forecast.forecastday)
export const isLoadingCheck = createSelector([weatherSelect], (weather) => weather.loading)