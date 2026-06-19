import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items: [],
    cartCount: 0,
    totalPrice: 0,
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item.productId === action.payload.productId);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            }
            else {
                state.items.push(action.payload);
            }
            state.cartCount = state.items.length;
            state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        },
        updateCart: (state, action) => {
            const item = state.items.find(item => item.productId === action.payload.productId);
            if (item) {
                item.quantity = action.payload.quantity;
            }
            state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        },
        deleteFromCart: (state, action) => {
            state.items = state.items.filter(item => item.productId !== action.payload);
            state.cartCount = state.items.length;
            state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        }
    },
});
export const { addToCart, updateCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
