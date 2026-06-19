import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    items: [],
    status: "idle",
    error: null,
};
export const fetchCategories = createAsyncThunk("categories/fetchCategories", async () => {
    const response = await axios.get("https://fakestoreapi.com/products/categories");
    return response.data;
});
const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
            state.status = "loading";
        })
            .addCase(fetchCategories.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.items = action.payload;
        })
            .addCase(fetchCategories.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message ?? "Unknown Error";
        });
    },
});
export default categoriesSlice.reducer;
