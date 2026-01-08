import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk(
"products/fetchAll",
async () => {
const res = await fetch("https://fakestoreapi.com/products");
if (!res.ok) throw new Error("Failed to fetch products");
return await res.json();
}
);


const productsSlice = createSlice({
name: "products",
initialState: {
items: [],
status: "idle", // idle | loading | succeeded | failed
error: null,
},
reducers: {},
extraReducers: (builder) => {
builder
.addCase(fetchProducts.pending, (state) => {
state.status = "loading";
state.error = null;
})
.addCase(fetchProducts.fulfilled, (state, action) => {
state.status = "succeeded";
state.items = action.payload;
})
.addCase(fetchProducts.rejected, (state, action) => {
state.status = "failed";
state.error = action.error.message || "Unknown error";
});
},
});


export default productsSlice.reducer;