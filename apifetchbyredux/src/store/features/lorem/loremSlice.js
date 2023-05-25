import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetLorem = createAsyncThunk(
  "Lorem/getData",
  async(arg, { rejectWithValue }) => {
    try {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      // const mainData = await data;
      console.log("thsi is ",data);
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);
const LoremSlice = createSlice({
  name: "Lorem",
  initialState: {
    data: [],
    isSuccess: false,
    message: "",
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [GetLorem.pending]: (state, { payload }) => {
        console.log("pend",payload);
      state.loading = true;
    },
    [GetLorem.fulfilled]: (state, {payload}) => {
      console.log("121212",  payload);
      state.loading = false;
      state.data = payload.data;
      state.isSuccess = true;
    },
    [GetLorem.rejected]: (state, { payload }) => {
        console.log("Rejected",payload);
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
});
export default LoremSlice;
