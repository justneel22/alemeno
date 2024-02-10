import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchCourses = createAsyncThunk("fetchCourses", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=16");
  return response.json();
});

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCourses.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCourses.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCourses.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default coursesSlice.reducer;