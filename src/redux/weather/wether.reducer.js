import { weatherType } from "./weather.type"

const INITAIL_STATE = {
    currerntWeather: null,
    loading: false,
    error: null
}
const weatherReducer = (state = INITAIL_STATE, action) => {

    switch (action.type) {
        case weatherType.WEATHER_FETCH_START:
            return {
                ...state,
                loading: true
            }
        case weatherType.WEATHER_FETCH_SUCC:
            return {
                ...state,
                currerntWeather: action.payload,
                loading: false
            }
        case weatherType.WEATHER_FETCH_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }

}

export default weatherReducer