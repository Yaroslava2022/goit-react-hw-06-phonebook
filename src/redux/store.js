import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import { persistStore,
    persistReducer, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,} from 'redux-persist';

// export const store =configureStore ({reducer});

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(logger);

const contactsPersistConfig = {
    key: "contacts",
    storage,
    blacklist: ["filter"],
  
  };

  const persistedReducer = persistReducer(contactsPersistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);

// export default { store, persistor };