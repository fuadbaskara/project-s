import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/es/storage";

import mainReducer from "../reducers/mainReducer.js";

const rootReducer = {
  mainReducer: mainReducer
};

// const Immutable = require("immutable");
// const Serialize = require("remotedev-serialize");
// const reduxPersist = require("redux-persist");

// function immutableTransform(config) {
//   config = config || {};
//
//   const serializer = Serialize.immutable(Immutable, config.records);
//
//   return reduxPersist.createTransform(
//     serializer.stringify,
//     serializer.parse,
//     config
//   );
// }
//
// const persistConfig = {
//   transforms: [immutableTransform()],
//   key: "root",
//   storage
// };

const reducer = combineReducers(rootReducer);
// const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  // persistedReducer,
  reducer,
  applyMiddleware(thunkMiddleware)
);

export default store
// export const persistor = persistStore(store);
