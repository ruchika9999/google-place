import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { AsyncState } from "../../utils/constant";
import { LocationType } from "../../utils/types";
import { locations } from "../../utils/data";

export interface LocationsState {
  status: AsyncState;
  data: LocationType[];
}

export const initialState: LocationsState = {
  status: AsyncState.IDLE,
  data: [],
};

export const fetchLocations = createAsyncThunk(
  "fetch addresses",
  async (value: string) => {
    try {
      if (value !== "") {
        return new Promise<LocationType[]>((resolve) => {
          setTimeout(() => {
            const filteredLocations = locations
              .slice(0, 20)
              .filter((location) => {
                const searchText = value.toLowerCase();
                const locationText = location.label.text.toLowerCase();
                return locationText.includes(searchText);
              });
            resolve(filteredLocations);
          }, 1000);
        });
      } else {
        return [];
      }
    } catch (error) {
      if (error) {
        throw new Error(error as string);
      }
    }
  }
);

export const fetchAddressesSlice = createSlice({
  name: "fetchAddresses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocations.pending, (state) => {
        state.status = AsyncState.LOADING;
      })
      .addCase(fetchLocations.fulfilled, (state, action) => {
        state.status = AsyncState.SUCCEEDED;
        state.data = action.payload as LocationType[];
      })
      .addCase(fetchLocations.rejected, (state) => {
        state.status = AsyncState.FAILED;
      });
  },
});

export const locationsStore = (state: RootState) => state.locations;

export default fetchAddressesSlice.reducer;
