import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/data.json";
const initialState = data.header;
export const headerSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default headerSlice.reducer;
