import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    items: [],
    filteredItems: [],
    status: "idle",
    error: null,
};
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
});
export const fetchProductsByCategory = createAsyncThunk("products/fetchProductsByCategory", async (category) => {
    const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    return response.data;
});
export const fetchLatestProducts = createAsyncThunk("products/fetchLatest", async (limit) => {
    const response = await axios.get(`https://fakestoreapi.com/products?limit=${limit}`);
    return response.data;
});
export const addProduct = createAsyncThunk("products/addProduct", async (newProduct) => {
    const response = await axios.post("https://fakestoreapi.com/products", newProduct);
    return response.data;
});
export const updateProduct = createAsyncThunk("products/updateProduct", async (product) => {
    const response = await axios.put(`https://fakestoreapi.com/products/${product.id}`, product);
    return response.data;
});
export const deleteProduct = createAsyncThunk("products/deleteProduct", async (id) => {
    await axios.delete(`https://fakestoreapi.com/products/${id}`);
    return id;
});
const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        filterProductsByCategory: (state, action) => {
            if (action.payload === null) {
                state.filteredItems = state.items;
            }
            else {
                state.filteredItems = state.items.filter((product) => product.category === action.payload);
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
            state.status = "loading";
        })
            .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.items = action.payload;
            state.filteredItems = action.payload;
        })
            .addCase(fetchProducts.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message ?? "حدث خطأ غير معروف";
        })
            .addCase(updateProduct.fulfilled, (state, action) => {
            const index = state.items.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        })
            .addCase(deleteProduct.fulfilled, (state, action) => {
            state.items = state.items.filter((product) => product.id !== action.payload);
        });
    },
});
export const { filterProductsByCategory } = productsSlice.actions;
export default productsSlice.reducer;
