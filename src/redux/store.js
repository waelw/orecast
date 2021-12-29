import { applyMiddleware, createStore } from "redux"
import logger from "redux-logger"
import persistStore from "redux-persist/es/persistStore"
import thunk from "redux-thunk"
import rootReducer from "./root.reducer"
const mid = [thunk]
if (process.env.NODE_ENV === "development")
    mid.push(logger)

export const store = createStore(rootReducer, applyMiddleware(...mid))
export const persistor = persistStore(store)


