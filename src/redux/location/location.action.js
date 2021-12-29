import { locationTypes } from "./location.type"

export const locationUpdate = (place) => ({

    type: locationTypes.LOCATION_UPDATE,
    payload: place
})