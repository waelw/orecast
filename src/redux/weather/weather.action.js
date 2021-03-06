import { weatherType } from "./weather.type"

export const fetchStart = () => ({
    type: weatherType.WEATHER_FETCH_START
})

export const fetchSucc = (data) => ({
    type: weatherType.WEATHER_FETCH_SUCC,
    payload: data
})

export const fetchFail = (err) => ({
    type: weatherType.WEATHER_FETCH_FAIL,
    payload: err
})


export const fetchAsync = (location) => {
    return async dispatch => {
        let data = null
        dispatch(fetchStart())
        await fetch(`https://api.weatherapi.com/v1/forecast.json?key=cc0be04034ee4a7c80580524210312&q=${location}&days=7`)
            .then(async res => {
                data = await res.json()
                if (data.error) {
                    dispatch(fetchFail(data.error))
                }
                else
                    dispatch(fetchSucc(data))
            })

    }
}