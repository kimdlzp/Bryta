import { createSlice } from "@reduxjs/toolkit";
import { getFavorite, addFavorite, delFavorite } from "./API/favoriteAPI";

const initialState = [];

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFavorite.fulfilled, (state, action) => {
        state = action.payload;
        return state;
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(delFavorite.fulfilled, (state, action) => {
        return state.filter(
          (state) => state.actorId !== action.payload.actorId
        );
      })
      .addDefaultCase((state) => {
        return state;
      });
  },
});

export default favoriteSlice.reducer;
