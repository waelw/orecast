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
    return dispatch => {
        let data = null
        dispatch(fetchStart())
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=cc0be04034ee4a7c80580524210312&q=${location}&days=7`)
            .then(async res => {
                data = await res.json()
                console.log(data)
                dispatch(fetchSucc(data))
            })
            .catch(async err => {
                dispatch(fetchFail(err))
            })
    }
}