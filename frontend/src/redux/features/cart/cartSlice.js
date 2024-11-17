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
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item._id !== action.payload._id);
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Product removed from the cart",
                showConfirmButton: false,
                timer: 1500
            });
        },
        clearCart: (state) => {
            state.cartItems = [];
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "The product cart is empty",
                showConfirmButton: false,
                timer: 1500
            });
        }

    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;