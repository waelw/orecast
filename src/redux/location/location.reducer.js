import { locationTypes } from "./location.type"

const INITIAL_STATE = {
    location: null,
    err: ""
}
const locationReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case locationTypes.LOCATION_UPDATE:
            return {
                ...state,
                location: action.payload
            }
        default:
            return state
    }
}

export default locationReducer