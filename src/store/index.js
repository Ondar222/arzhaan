import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { useDispatch, useSelector } from "react-redux";
import filterSettingsSliceReducer from "./slices/filterSettings";
import mapSettingsSliceReducer from './slices/mapSettings'
import selectedArzhaanSliceReducer from "./slices/selectedArzhaanSlice";

const store = () => configureStore({
  reducer: {
    mapSettings: mapSettingsSliceReducer,
    filterSettings: filterSettingsSliceReducer,
    selectedArzhaan: selectedArzhaanSliceReducer
  }
})

export default store
export const useAppDispatch = () => useDispatch()
export const useAppSelector = useSelector

export const wrapper = createWrapper(store);