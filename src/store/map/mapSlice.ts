import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { AsyncState } from "../../utils/constant";
import { LocationType } from "../../utils/types";

export interface LocationsState {
  status: AsyncState;
  data: LocationType[];
}

export const initialState: LocationsState = {
  status: AsyncState.IDLE,
  data: [],
};

export const mapLocations = createSlice({
  name: "map-locations",
  initialState,
  reducers: {
    addLocation: (state, action: PayloadAction<LocationType>) => {
      state.data = [...state.data, action.payload];
    },
  },
});


export const { addLocation } = mapLocations.actions;

export default mapLocations.reducer;
