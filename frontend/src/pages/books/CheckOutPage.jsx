import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { AiOutlineClose, AiOutlineDown } from "react-icons/ai";

const CheckOutPage = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const total = cartItems
        .reduce(
            (acc, item) => acc + (item.newPrice || 0) * (item.quantity || 1),
            0
        )
        .toFixed(2);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: {
            street: "",
            city: "",
            country: "",
            state: "",
            zipcode: "",
        },
        agree: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name.startsWith("address.")) {
            const field = name.split(".")[1];
            setFormData((prev) => ({
                ...prev,
                address: {
                    ...prev.address,
                    [field]: value,
                },
            }));
        } else if (type === "checkbox") {
            setFormData((prev) => ({ ...prev, [name]: checked }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newOrder = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            address: {
                city: formData.city,
                country: formData.country,
                state: formData.state,
                zip: formData.zipcode
            },
            productIds: cartItems.map((item) => item?._id),
            totalPrice: total,
        }

        console.log(newOrder);
    };

    return (
        <section>
            <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
                <div className="container max-w-screen-lg mx-auto">
                    <div>
                        <h2 className="font-semibold text-xl text-gray-600 mb-2">
                            Cash On Delivery
                        </h2>
                        <p className="text-gray-500 mb-2">Total Price: ${total}</p>
                        <p className="text-gray-500 mb-6">Items: {cartItems.length}</p>

                        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                            <form
                                onSubmit={handleSubmit}
                                className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 my-8"
                            >
                                <div className="text-gray-600">
                                    <p className="font-medium text-lg">Personal Details</p>
                                    <p>Please fill out all the fields.</p>
                                </div>

                                <div className="lg:col-span-2">
                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                        <div className="md:col-span-5">
                                            <label htmlFor="name">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            />
                                        </div>

                                        <div className="md:col-span-5">
                                            <label htmlFor="email">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                placeholder="email@domain.com"
                                            />
                                        </div>

                                        <div className="md:col-span-5">
                                            <label htmlFor="phone">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                id="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                placeholder="+123 456 7890"
                                            />
                                        </div>

                                        <div className="md:col-span-3">
                                            <label htmlFor="address.street">Street Address</label>
                                            <input
                                                type="text"
                                                name="address.street"
                                                id="address.street"
                                                value={formData.address.street}
                                                onChange={handleChange}
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            />
                                        </div>

                                        <div className="md:col-span-2">
                                            <label htmlFor="address.city">City</label>
                                            <input
                                                type="text"
                                                name="address.city"
                                                id="address.city"
                                                value={formData.address.city}
                                                onChange={handleChange}
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            />
                                        </div>

                                        <div className="md:col-span-2">
                                            <label htmlFor="address.country">
                                                Country / Region
                                            </label>
                                            <input
                                                type="text"
                                                name="address.country"
                                                id="address.country"
                                                value={formData.address.country}
                                                onChange={handleChange}
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            />
                                        </div>

                                        <div className="md:col-span-2">
                                            <label htmlFor="address.state">State / Province</label>
                                            <input
                                                type="text"
                                                name="address.state"
                                                id="address.state"
                                                value={formData.address.state}
                                                onChange={handleChange}
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            />
                                        </div>

                                        <div className="md:col-span-1">
                                            <label htmlFor="address.zipcode">Zip Code</label>
                                            <input
                                                type="text"
                                                name="address.zipcode"
                                                id="address.zipcode"
                                                value={formData.address.zipcode}
                                                onChange={handleChange}
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            />
                                        </div>

                                        <div className="md:col-span-5 mt-3">
                                            <div className="inline-flex items-center">
                                                <input
                                                    type="checkbox"
                                                    name="agree"
                                                    id="agree"
                                                    checked={formData.agree}
                                                    onChange={handleChange}
                                                    className="form-checkbox"
                                                />
                                                <label
                                                    htmlFor="agree"
                                                    className="ml-2"
                                                >
                                                    I agree to the{" "}
                                                    <Link className="underline text-blue-600">
                                                        Terms & Conditions
                                                    </Link>{" "}
                                                    and{" "}
                                                    <Link className="underline text-blue-600">
                                                        Shopping Policy
                                                    </Link>
                                                    .
                                                </label>
                                            </div>
                                        </div>

                                        <div className="md:col-span-5 text-right">
                                            <button
                                                disabled={!formData.agree}
                                                className={`${formData.agree
                                                    ? "bg-blue-500 hover:bg-blue-700"
                                                    : "bg-gray-300 cursor-not-allowed"
                                                    } text-white font-bold py-2 px-4 rounded`}
                                            >
                                                Place an Order
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CheckOutPage;
