import { Component, useContext, useEffect, useState } from "react";
import Pic2 from "../../../image/ourMenuImg/download (2).jpeg";
import CartCOntext from "../../../Context/context";
import { isNamedExportBindings } from "typescript";
import Swal from 'sweetalert2';
import axios from "axios";
import { log } from "console";
// import CartCOntext from "../../../Context/context";

interface CartItem {
    id: number;
    itemName: string;
    price: number;
    quantity: number;
    images?: string;
}

// const initialCartItems: CartItem[] = [
//     { id: 1, itemName: "Espresso", price: 250, quantity: 1 },
//     { id: 2, itemName: "Cappuccino", price: 300, quantity: 1 },
//     { id: 3, itemName: "Blueberry Muffin", price: 150, quantity: 1 },
//     { id: 4, itemName: "Blueberry Muffin", price: 150, quantity: 1 },
// ];

const Cart = () => {
    const { cartItems, setCartData, removeData } = useContext(CartCOntext);
    // const [cartItem, setCartItems] = useState<CartItem[]>(initialCartItems);
    const [orderSummary, setOrderSummary] = useState<CartItem[]>([]);
    const [totalOrderAmount, setTotalOrderAmount] = useState<number>(0);
    const [qty, setQty] = useState<any>(cartItems.map((element: any) => element.quantity));
    const [totalPrice, setTotalPrice] = useState(0);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const shippingFee = 300;
    // let totalPrice = 0;

    useEffect(() => {
        // setQty(cartItems.quantity)
        console.log(cartItems)
        console.log(cartItems.quantity);
    }, []);

    useEffect(() => {
       
        const totalPrice = cartItems.reduce((total:any, item:any, index:any) => total + item.price * qty[index], 0);
        console.log(totalPrice);
        setTotalPrice(totalPrice + 300);
    }, [qty]);

    console.log(qty)

    const handleIncrement = (qty: number) => {

        setQty((prev: any) => prev.map((element: any, index: number) => {
            if (index === qty) {
                return element + 1
            }
            return element
        }));
    };

    const handleDecrement = (qty: number) => {

        setQty((prev: any) => prev.map((element: any, index: number) => {
            if (index === qty) {
                return element - 1
            }
            return element
        }));

    };

    async function saveOrder() {
        // setOrderSummary(cartItems);
        // const total = cartItems.reduce((total:any, item:any) => total + item.price * item.quantity, 0);
        // setTotalOrderAmount(total + shippingFee);
        // setCartData(orderSummary);
        // showAlert();
        if (cartItems.length <= 0) return;
        if (name.length <= 0) return;
        if (address.length <= 0) return;

        try {

            const response = await axios.post("http://localhost:4000/api/v1/order", {
                orderItems: cartItems.map((item: any) => item._id),
                name,
                address,
                totalPrice
            })
            removeData();
            setName("");
            setAddress("");
            showAlert();


        } catch (e) {
            console.log(e);

        }
    }

    // const ItemsOrdered = () => {
    //     setOrderSummary(cartItems);
    //     const total = cartItems.reduce((total:any, item:number) => total + item.price * item.quantity, 0);
    //     setTotalOrderAmount(total + shippingFee);
    // };

    const showAlert = () => {
        Swal.fire({
            title: 'Order Placed!',
            text: 'Your order has been successfully placed.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    };

    return (
        <div className="flex flex-col md:flex-row h-full bg-gradient-to-r from-gray-800 to-gray-900 justify-center p-4 md:p-10 gap-5">
            <div className="w-full md:w-2/3 p-4 md:p-6 rounded-lg bg-white">
                <div className="flex justify-between mb-6">
                    <h2 className="text-2xl font-bold">Shopping Cart</h2>
                    <h2 className="text-xl font-bold">{cartItems.length} Items</h2>
                </div>

                <div className="hidden md:flex justify-between mb-4">
                    <span>Item Details</span>
                    <span>Quantity</span>
                    <span>Price</span>
                    <span>Select</span>
                </div>
                {cartItems.map((item: any, index: any) => (
                    <div
                        key={item.id}
                        className="flex flex-col md:flex-row items-center justify-between mb-4 p-4 border rounded-lg"
                    >
                        <div className="flex items-center mb-4 md:mb-0">
                            <img
                                src={item.images}
                                alt={`${item.images}`}
                                className="w-20 h-20 object-cover mr-4"
                            />
                            <div>
                                <div>{item.name}</div>
                                <button className="text-red-500 mt-2">Remove</button>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 mb-4 md:mb-0">
                            <button
                                className="px-3 py-1 bg-gray-300 rounded focus:outline-none"
                                onClick={() => handleDecrement(index)}
                            >
                                -
                            </button>
                            <span className="text-lg">{qty[index].toString()}</span>
                            <button
                                className="px-3 py-1 bg-gray-300 rounded focus:outline-none"
                                onClick={() => handleIncrement(index)}
                            >
                                +
                            </button>
                        </div>


                        <div className="mr-4">Rs. {(item.price * 1).toLocaleString()}</div>
                        <input type="checkbox" className="mr-4" defaultChecked />
                    </div>
                ))}
                <div className="flex justify-between mt-6">
                    <button className="text-blue-500">← Go back</button>
                    {/* <button className="bg-green-700 text-white px-4 py-2 rounded" onClick={ItemsOrdered}>
                        Order
                    </button> */}
                </div>
            </div>

            <div className="w-full md:w-1/3  rounded-lg bg-white p-4 md:p-6 flex flex-col">
                <h2 className="text-lg font-bold mb-4">Order Summary</h2>
                <div className="border-t border-b py-4 mb-4">
                    <p className="font-semibold mb-2">PRICE DETAILS ({orderSummary.length} items)</p>
                    {orderSummary.map((item) => (
                        <div className="flex justify-between mb-2" key={item.id}>
                            <span>{item.itemName} x {item.quantity}</span>
                            <span>Rs. {(item.price * item.quantity).toLocaleString()}</span>
                        </div>
                    ))}
                    <div className="flex justify-between mb-2">
                        <span>Total MRP</span>
                        <span>Rs. {totalPrice - 300}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Shipping Fee</span>
                        <span className="text-green-500">Rs. 300</span>
                    </div>
                </div>

                <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-bold">Total Amount</span>
                    <span className="text-lg font-bold">Rs. {totalPrice}</span>
                </div>

                <div>
                    <input
                        value={name}
                        type="text"
                        placeholder="Enter Your Name"
                        className="w-full border p-2 rounded mb-4"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        value={address}
                        type="text"
                        placeholder="Enter Your Address"
                        className="w-full border p-2 rounded mb-4"
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>

                <button
                    className="w-full bg-blue-600 text-white py-2 rounded"
                    onClick={saveOrder}
                >
                    Place Order
                </button>
                <p className="text-center mt-2 text-sm text-gray-600">
                    Safe and Secure Payments. Easy returns. 100% Authentic products.
                </p>
            </div>
        </div>
    );
};

export default Cart;
