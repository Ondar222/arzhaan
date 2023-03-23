const { createAsyncThunk } = require("@reduxjs/toolkit");

export const getSelectedArzhaan = createAsyncThunk("selectedArzhaanSlice/getSelectedArzhaan",
  async (id, description) => {
    const res = await fetch(`${process.env.backend}/api/features/${id}?populate=*`)
    .then((res) => res.json())
    .then((res) => res.data)

    return res
  })