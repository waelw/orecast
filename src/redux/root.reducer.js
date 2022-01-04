import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import locationReducer from "./location/location.reducer";
import weatherReducer from "./weather/wether.reducer";


const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ["location"]
}


const rootReducer = combineReducers({
    location: locationReducer,
    weather: weatherReducer
})


export default persistReducer(persistConfig, rootReducer)