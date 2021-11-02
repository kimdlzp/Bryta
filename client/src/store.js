import { configureStore } from "@reduxjs/toolkit";

import { persistedReducer } from "./reducers/index";

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
