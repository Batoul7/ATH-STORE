import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    currentPage: 1,
    itemsPerPage: 8,
    totalItems: 0,
};
const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        nextPage: (state) => {
            if (state.currentPage < Math.ceil(state.totalItems / state.itemsPerPage)) {
                state.currentPage += 1;
            }
        },
        prevPage: (state) => {
            if (state.currentPage > 1) {
                state.currentPage -= 1;
            }
        },
        setPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setTotalItems: (state, action) => {
            state.totalItems = action.payload;
        },
    },
});
export const { nextPage, prevPage, setPage, setTotalItems } = paginationSlice.actions;
export default paginationSlice.reducer;
