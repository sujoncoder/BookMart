import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
    cartItems: []
};


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existItem = state.cartItems.find((item) => item._id === action.payload._id);
            if (!existItem) {
                state.cartItems.push(action.payload);
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Product added to the cart",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Item already exist",
                    showConfirmButton: false,
                });
            }
        }

    }
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;