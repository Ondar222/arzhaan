import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { useDispatch, useSelector } from "react-redux";
import filterSettingsSliceReducer from "./slices/filterSettings";
import mapSettingsSliceReducer from './slices/mapSettings'

const store = () => configureStore({
  reducer: {
    mapSettings: mapSettingsSliceReducer,
    filterSettings: filterSettingsSliceReducer
  }
})

export default store
export const useAppDispatch = () => useDispatch()
export const useAppSelector = useSelector

export const wrapper = createWrapper(store);