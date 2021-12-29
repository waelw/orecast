import { createSelector } from "reselect";

const locationSelect = state => state.location

export const currentLocationselector = createSelector([locationSelect], location => location.location)