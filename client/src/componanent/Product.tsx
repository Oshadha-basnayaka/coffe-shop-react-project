import React, { useState } from "react";
import { Link } from "react-router-dom";

interface ProductType {
    img: string;
    title: string;
    description: string;
    price: number;  // Changed to number for arithmetic operations
    rating: string;
    quantity: number;
}

interface ProductProps {
    data: {
        [key: string]: any[];
    };
    viewButton: boolean;
    sliceCount: number;
}

const Product: React.FC<ProductProps> = (prop) => {
   
    const [selectedCategory, setSelectedCategory] = useState<keyof typeof prop.data>("coffee");
    const [quantities, setQuantities] = useState<number[]>(prop.data[selectedCategory].map(() => 1));
    // prop.data=prop.data[selectedCategory]
    const decrementQuantity = (index: number) => {
        setQuantities((prevQuantities) =>
            prevQuantities.map((quantity, i) =>
                i === index && quantity > 1 ? quantity - 1 : quantity
            )
        );
    };

    const incrementQuantity = (index: number) => {
        setQuantities((prevQuantities) =>
            prevQuantities.map((quantity, i) =>
                i === index ? quantity + 1 : quantity
            )
        );
    };

    const addToCart = (index: number) => {
        // Implement logic to add the product to the cart
        console.log(`Add product ${index} to cart with quantity ${quantities[index]}`);
    };

    const handleCategoryChange = (category: keyof typeof prop.data) => {
        setSelectedCategory(category);
        setQuantities(prop.data[category].map(() => 1));
    };

    return (
        <div className="bg-gradient-to-r from-[#1B1B1B] to-[#535353] flex flex-col">
            <div className="justify-center flex flex-col items-center pt-14">
                <h1 className="text-2xl text-center text-[#AB8B5A]">Discover</h1>
                <h1 className="text-4xl text-center text-white font-bold">
                    OUR PRODUCT
                </h1>
                <br />
                <br />
                <p className="text-white text-center max-w-[700px]">
                    Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts.
                </p>
            </div>
            <br />
            <br />

            <div className="flex justify-center gap-10 items-center">
                {["coffee", "juice", "desserts"].map((category) => (
                    <div
                        key={category}
                        className={`px-5 py-2 border-gray-500 border-2 rounded ${selectedCategory === category ? "bg-[#AB8A5A]" : ""}`}
                        onClick={() => handleCategoryChange(category as keyof typeof prop.data)}
                    >
                        <h1 className="text-2xl text-center text-black">{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
                    </div>
                ))}
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-evenly items-center rounded-lg shadow-md overflow-hidden m-4">
                {prop.data[selectedCategory].slice(prop.sliceCount).map((product, index) => {
                    const totalPrice = product.price * quantities[index];
                    return (
                        <div key={index} className="rounded-lg bg-white">
                            <img className="rounded-t-lg w-full h-[250px] object-cover" src={product.img} alt={product.title} />

                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{product.title}</h3>
                                <p className="text-sm text-gray-600">{product.description}</p>
                                <div className="mt-2 flex items-center">
                                    <span className="text-lg font-bold">${totalPrice.toFixed(2)}</span>
                                    <div className="ml-auto flex items-center">
                                        <span className="text-sm text-yellow-500">{product.rating}</span>
                                        <svg
                                            className="w-4 h-4 text-yellow-500"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M10 15l-5.39 2.83 1.03-5.63L1 7.76l5.65-.82L10 2l2.35 4.94 5.65.82-4.63 4.44 1.03 5.63z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="mt-4 flex items-center justify-between">
                                    <div className="flex items-center">
                                        <button
                                            onClick={() => decrementQuantity(index)}
                                            className="bg-gray-200 text-gray-700 px-2 py-1 rounded-l"
                                        >
                                            -
                                        </button>
                                        <span className="px-4 py-1 bg-gray-100 border-t border-b border-gray-200">
                                            {quantities[index]}
                                        </span>
                                        <button
                                            onClick={() => incrementQuantity(index)}
                                            className="bg-gray-200 text-gray-700 px-2 py-1 rounded-r"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button
                                        onClick={() => addToCart(index)}
                                        className="ml-4 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition"
                                        aria-label="Add to Cart"
                                    >
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 3h2l.4 2M7 13h10l3.38-8.07A1 1 0 0019.5 3H6.6l-1.2-3H1m4 14a4 4 0 100 8 4 4 0 000-8zm12 0a4 4 0 100 8 4 4 0 000-8z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <br />
            <br />

            <div className="flex justify-center items-center">
                {prop.viewButton ? (
                    <button className="text-white border-2 border-[#AB8A5A] px-5 py-2 animate-pulse">
                        <Link to="/menu">View Menu</Link>
                    </button>
                ) : null}
            </div>
            <br />
            <br />
            <br />
            <br />
        </div>
    );
};

export default Product;
