import { Component, useState } from "react";

interface CartItem {
    id: number;
    itemName: string;
    category: string;
    price: number;
}

const cartItems: CartItem[] = [
    { id: 1, itemName: "Espresso", category: "Coffee", price: 250 },
    { id: 2, itemName: "Cappuccino", category: "Coffee", price: 300 },
    { id: 3, itemName: "Blueberry Muffin", category: "Sweet", price: 150 },
];

const Cart = () => {
    const [pickupTime, setPickupTime] = useState("");
    const [pickupDate, setPickupDate] = useState("");
    const [returnDate, setReturnDate] = useState("");

    return (
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 flex justify-center  items-center pt-14 ">
            <div className="flex justify-center items-center w-full p-10 gap-5">
                <div className="h-full w-8/12 p-6 rounded-lg shadow-lg  bg-white ">
                    <div className="flex justify-between">
                        <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
                        <h2 className="text-xl font-bold mb-6">3 Items</h2>
                    </div>

                    <div className="flex justify-between mb-4">
                        <span>Item Details</span>
                        <span>Category</span>
                        <span>Price</span>
                        <span>Receipt</span>
                    </div>
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between mb-4 p-4 border rounded-lg"
                        >
                            <div className="flex items-center">
                                <img
                                    src="..\image\ourMenuImg\download (3).jpeg"
                                    alt={`${item.itemName}`}
                                    className="w-20 h-20 object-cover mr-4"
                                />
                                <div>
                                    <div>{item.itemName}</div>
                                    <div>{item.category}</div>
                                    <button className="text-red-500 mt-2">Remove</button>
                                </div>
                            </div>
                            <input type="checkbox" className="mr-4" />
                            <div className="mr-4">Rs. {item.price.toLocaleString()}</div>
                            <div>
                                <input type="file" className="file-input" />
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-between mt-6">
                        <button className="text-blue-500">← Go back</button>
                        <button className="bg-red-500 text-white px-4 py-2 rounded">
                            Clear Cart
                        </button>
                    </div>
                </div>

                <div className="h-full w-4/12 p-6 rounded-lg shadow-lg  bg-white  ">
                    <h2 className="text-xl font-bold mb-4">Proceed to Checkout</h2>
                    <p className="text-gray-500 mb-4">3 Items</p>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="pickup-time">
                            Pick-Up Time
                        </label>
                        <input
                            id="pickup-time"
                            type="time"
                            value={pickupTime}
                            onChange={(e) => setPickupTime(e.target.value)}
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="pickup-date">
                            Pick-Up Date
                        </label>
                        <input
                            id="pickup-date"
                            type="date"
                            value={pickupDate}
                            onChange={(e) => setPickupDate(e.target.value)}
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="return-date">
                            Return Date
                        </label>
                        <input
                            id="return-date"
                            type="date"
                            value={returnDate}
                            onChange={(e) => setReturnDate(e.target.value)}
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>

                    <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-bold">Total</span>
                        <span className="text-lg font-bold">
                            Rs.{" "}
                            {cartItems
                                .reduce((total, item) => total + item.price, 0)
                                .toLocaleString()}
                        </span>
                    </div>

                    <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
                        Request Reservation
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
