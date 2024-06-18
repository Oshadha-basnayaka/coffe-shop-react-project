import React, { useState } from "react";
import { Link } from "react-router-dom";

const Product = (prop: any) => {
    const [selectedCategory, setSelectedCategory] =
        useState<keyof typeof prop.data.products>("coffee");

    return (
        <div className=" bg-gradient-to-r from-[#1B1B1B] to-[#535353] flex flex-col">
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

            <div className="flex justify-center gap-10 items-center   ">
                <div
                    className={`px-5 py-2 border-gray-500 border-2 rounded ${selectedCategory === "coffee" ? "bg-[#AB8A5A]" : ""
                        }`}
                    onClick={() => setSelectedCategory("coffee")}
                >
                    <h1 className="text-2xl text-center text-black">Coffee</h1>
                </div>
                <div
                    className={`px-5 py-2 border-gray-500 border-2 rounded ${selectedCategory === "juice" ? "bg-[#AB8A5A]" : ""
                        }`}
                    onClick={() => setSelectedCategory("juice")}
                >
                    <h1 className="text-2xl text-center  text-black">Juice</h1>
                </div>
                <div
                    className={`px-5 py-2 border-gray-500 border-2 rounded ${selectedCategory === "desserts" ? "bg-[#AB8A5A]" : ""
                        }`}
                    onClick={() => setSelectedCategory("desserts")}
                >
                    <h1 className="text-2xl text-center  text-black">Desserts</h1>
                </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="flex justify-evenly items-center">
                {prop.data[selectedCategory].map((product: any, index: number) => (
                    <div
                        key={index}
                        className="flex flex-col justify-evenly items-center text-center gap-5"
                    >
                        <img
                            className="w-[250px] h-[250px]"
                            src={product.img}
                            alt={product.title}
                        />
                        <h1 className="text-2xl text-center text-white">{product.title}</h1>
                        <p className="max-w-[250px] text-white">{product.description}</p>
                        <h1 className="text-2xl text-center text-white ">
                            {product.price}
                        </h1>
                        <div className="flex justify-center items-center">
                            <button className="text-white border-2 border-[#AB8B5A] px-5 py-2  animate-pulse ">
                                Add To cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <br />
            <br />

            <div className="flex justify-center items-center">
                {prop.viewButton ? (
                    <button className="text-white border-2 border-[#AB8B5A] px-5 py-2 animate-pulse">
                        <Link to="/menu">View Menu</Link>
                    </button>
                ) : (
                    ""
                )}
            </div>
            <br />
            <br />
            <br />
            <br />

            <div className="bg-white rounded-lg shadow-md overflow-hidden w-60 m-4">
                <img className="w-full h-40 object-cover" src={``} alt={``} />
                <div className="p-4">
                    <h3 className="text-lg font-semibold">{""}</h3>
                    <p className="text-sm text-gray-600">{""}</p>
                    <div className="mt-2 flex items-center">
                        <span className="text-lg font-bold">${""}</span>
                        <div className="ml-auto flex items-center">
                            <span className="text-sm text-yellow-500">{"rating"}</span>
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
                                // onClick={"decrementQuantity"}
                                className="bg-gray-200 text-gray-700 px-2 py-1 rounded-l"
                            >
                                -
                            </button>
                            <span className="px-4 py-1 bg-gray-100 border-t border-b border-gray-200">
                                {"quantity"}
                            </span>
                            <button
                                //  onClick={"incrementQuantity"}
                                className="bg-gray-200 text-gray-700 px-2 py-1 rounded-r"
                            >
                                +"
                            </button>
                        </div>
                        <button
                            // onClick={"addToCart"}
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
            
        </div>
    );
};

export default Product;
