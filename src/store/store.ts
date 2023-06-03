import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import fetchReducer from "./map/fetchSlice";
import mapReducer from "./map/mapSlice";

export const store = configureStore({
  reducer: {
    locations: fetchReducer,
    mapLocations: mapReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
