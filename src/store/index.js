import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { articlesReducer } from "./articles/articlesReducer";
import { authReducer } from "./auth/authReducer";
import { userReducer } from "./users/usersReducer";
import { 
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';
  
  const rootReducer = combineReducers({
    articles : articlesReducer,
    auth : authReducer,
    user : userReducer,
  });
  
  const persistConfig = {
    key: 'root',
    storage,
  }
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);