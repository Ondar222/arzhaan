import { getSelectedArzhaan } from "./service";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  data: '',
  title: '',
  location: '',
  brief: '',
  medical_properties: '',
  photo_materials: '',

  email: '',
  address: '',
  phone: ''
}


const selectedArzhaanSlice = createSlice({
  name: "selectedArzhaanSlice",
  initialState,
  extraReducers: {
    [getSelectedArzhaan.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.data = action.payload
    }
  }
})

export const { } = selectedArzhaanSlice.actions
export default selectedArzhaanSlice.reducer