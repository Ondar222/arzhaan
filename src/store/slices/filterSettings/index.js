import { createSlice } from "@reduxjs/toolkit";
import arzhaan from '@/data/arzhaan2.json'

const initialState = {
  query: "",
  data: JSON.stringify(arzhaan),
  filteredData: JSON.parse(JSON.stringify(arzhaan)).features,
  isFilterOpen: false
}

const filterSettingsSlice = createSlice({
  name: 'filterSettings',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload
    },
    setFilterOpen: (state, action) => {
      state.isFilterOpen = action.payload
    },
    filterData: (state, action) => {
      state.filteredData = []
      JSON.parse(state.data).features.forEach((data) => {
        if (String(data.properties.description).toLowerCase().includes(String(state.query).toLowerCase())) {
          state.filteredData.push(data)
        }
      })
    }
  }
})

export const { setQuery, setFilterOpen, filterData } = filterSettingsSlice.actions
export default filterSettingsSlice.reducer