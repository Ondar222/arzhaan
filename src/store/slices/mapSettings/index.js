import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isModalOpen: false
}

const mapSettingsSlice = createSlice({
    name: 'mapSettings',
    initialState,
    reducers: {
        setIsModal: (state) => {
            state.isModalOpen = !state.isModalOpen
        },
    }
})

export const { setIsModal } = mapSettingsSlice.actions
export default mapSettingsSlice.reducer