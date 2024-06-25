import { Component, useEffect } from "react";
import React, { useState } from 'react';
import OurProductPic1
    from "../../../image/OurProductPic/Beafourtony Espresso Cups and Saucers Unique craft Ceramic Cup.png";
import OurProductPic2 from "../../../image/OurProductPic/Free PSD _ Mockup of a cup of takeaway coffee.png";
import OurProductPic3 from "../../../image/OurProductPic/Tea holic.png";
import Product from "../../../componanent/Product";
import { products } from "../Home/Homes";
import axios from "axios";


interface Product {
    id: number;
    category: string;
    name: string;
    description: string;
    price: string;
    image: string;
}

interface Props {
    products: Product[];
    sliceCount: number;
}


// const sampleProducts: Product[] = [
//     {
//         id: 1,
//         category: 'Coffee',
//         name: 'Cappuccino Coffee',
//         description: 'Indulge in warmth and spice with our Chai Coffee...',
//         price: '$2.89',
//         image: 'path_to_image1',
//     },
//     {
//         id: 2,
//         category: 'Coffee',
//         name: 'Ice Coffee',
//         description: 'Indulge in warmth and spice with our Chai Coffee...',
//         price: '$2.89',
//         image: 'path_to_image2',
//     },
//     {
//         id: 3,
//         category: 'Coffee',
//         name: 'Chai Coffee',
//         description: 'Indulge in warmth and spice with our Chai Coffee...',
//         price: '$2.89',
//         image: 'path_to_image3',
//     },
    
// ];

const Menu = ()=> {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        axios.get<Product[]>('http://localhost:5000/api/v1/product/category/666f334c77a48f405cabaf9a')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the products!", error);
            });
    }, []);
    
        return (
            <>

<div id="MenuhomePic" className="bg-cover bg-center h-64">
                    <div className="flex text-white font-bold justify-center items-center flex-col pt-12">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl">The Best Coffee Taste Experience</h1>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl">Menu</h1>
                    </div>
                </div>

                {/* Our Product */}
                <Product data={products} viewButton={false} sliceCount={0} />

            </>
        );
   
}


export default Menu;
