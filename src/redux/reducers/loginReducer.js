import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
  name: "auth",
  initialState: {
    id: null,
    password: null,
  },
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { setId, setPassword } = authSlice.actions;

// Action creators are generated for each case reducer function

// export default counterSlice.reducer
export default authSlice.reducer;
