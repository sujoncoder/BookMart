import { FaTrashAlt, FaArrowLeft, FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getImgUrl } from "../../utils/getImgUrl";
import { clearCart, removeFromCart } from "../../redux/features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    // Calculate Total
    const total = cartItems.reduce(
        (acc, item) => acc + (item.newPrice || 0) * (item.quantity || 1),
        0
    );

    // HANDLE REMOVE ITEM
    const handleRemoveItem = (product) => {
        dispatch(removeFromCart(product))
    };

    // CLEAR THE PRODUCT CART
    const handleClearCart = () => {
        dispatch(clearCart())
    };

    const handleCheckout = () => {
        navigate("/checkout");
    };

    const handleContinueShopping = () => {
        console.log("Continuing shopping");
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6 rounded">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center">
                    <FaShoppingCart className="mr-3 text-teal-500" />
                    Shopping Cart
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                    You have {cartItems.length} item(s) in your cart.
                </p>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    {cartItems.length > 0 ? (
                        <>
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
                                    <tr>
                                        <th className="py-3 px-6">Image</th>
                                        <th className="py-3 px-6">Title</th>
                                        <th className="py-3 px-6">Category</th>
                                        <th className="py-3 px-6">Price</th>
                                        <th className="py-3 px-6">Quantity</th>
                                        <th className="py-3 px-6">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 text-sm divide-y divide-gray-200">
                                    {cartItems.map((item) => (
                                        <tr
                                            key={item.id}
                                            className="hover:bg-gray-50 transition duration-150"
                                        >
                                            <td className="py-4 px-6">
                                                <img
                                                    src={getImgUrl(item.coverImage)}
                                                    alt={item.title}
                                                    className="w-16 h-16 object-cover rounded-lg shadow-md"
                                                />
                                            </td>
                                            <td className="py-4 px-6 font-medium">{item.title}</td>
                                            <td className="py-4 px-6 text-gray-500">{item.category}</td>
                                            <td className="py-4 px-6 font-semibold text-gray-800">
                                                ${item.newPrice?.toFixed(2)}
                                            </td>
                                            <td className="py-4 px-6">
                                                <div className="flex items-center space-x-2">
                                                    <button className="px-3 py-1 text-gray-600 bg-gray-100 rounded hover:bg-gray-200">
                                                        -
                                                    </button>
                                                    <span>{item.quantity}</span>
                                                    <button className="px-3 py-1 text-gray-600 bg-gray-100 rounded hover:bg-gray-200">
                                                        +
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6">
                                                <button
                                                    onClick={() => handleRemoveItem(item)}
                                                    className="text-red-500 hover:text-red-600 transition"
                                                >
                                                    <div className="hover:bg-red-100 p-3 rounded-full duration-200">
                                                        <FaTrashAlt className="size-6" />
                                                    </div>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="p-6 bg-gray-100">
                                <div className="flex justify-between items-center mb-4">
                                    <button
                                        onClick={handleClearCart}
                                        className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-600 transition"
                                    >
                                        Clear Cart
                                    </button>
                                    <div className="text-xl font-semibold">
                                        Total:{" "}
                                        <span className="ml-2 text-teal-500">${total.toFixed(2)}</span>
                                    </div>
                                </div>
                                <button
                                    onClick={handleContinueShopping}
                                    className="w-full text-center text-teal-500 hover:underline py-2 mt-4"
                                >
                                    <FaArrowLeft className="mr-2 inline" />
                                    Continue Shopping
                                </button>
                                <button
                                    onClick={handleCheckout}
                                    className="w-full bg-teal-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-600 mt-4"
                                >
                                    Proceed to Checkout
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="p-10 text-center">
                            <p className="text-gray-600 text-2xl font-mono">Your cart is empty.</p>
                            <button
                                onClick={handleContinueShopping}
                                className="mt-6 text-teal-500 text-lg font-semibold hover:underline"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartPage;
