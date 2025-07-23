import { Star } from 'lucide-react';
import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { CartContext } from '../context/CartContext';
import { useState } from 'react';
const URL = import.meta.env.VITE_Node_Api_Url;

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(CartContext);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [selectedSize, setSelectedSize] = useState("");

    if (!product) {
        return <p className="text-center mt-10">Product not found</p>;
    }

    const handleAddToCart = async () => {
        if (!user) {
            navigate('/login');
            return;
        }

        if (!selectedSize) {
            alert("Please select a size.");
            return;
        }

        await addToCart({
            userId: user._id,
            productId: product._id,
            name: product.name,
            imageUrl: product.imageUrl,
            price: product.price,
            size: selectedSize,
            quantity: 1
        });
        // console.log(addToCart)

        navigate('/cart');
        // console.log("added to cart successfully")
    };


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 my-20 md:gap-10 px-6 md:px-0'>
            <div className="flex md:1/2 gap-4 ">
                <div>
                    <img src={`${URL}${product.imageUrl}`} className='md:h-[580px]' alt={product.name} />
                </div>
            </div>

            <div className="flex md:1/2 flex-col mt-8 md:mt-0 ">
                <h1 className="text-[#3d3d3d] text-4xl font-bold">{product.name}</h1>

                <div className="flex items-center gap-1 text-[#1c1c1c] text-lg mt-4 ">
                    <Star fill='red' /><Star fill='red' /><Star fill='red' /><Star fill='red' /><Star fill='gray' />
                    <p>({product.reviews || 0})</p>
                </div>

                <div className="flex gap-5 font-semibold items-center my-5">
                    <div className="text-gray-500 text-2xl line-through ">${product.price + 20}</div>
                    <div className="text-red-500 text-3xl ">${product.price}</div>
                </div>

                <div>{product.smallDescription}</div>

                <div>
                    <h1 className='font-semibold text-gray-400 text-2xl mt-4'>Select Size</h1>
                    <div className="flex gap-4 items-center my-4 ">
                        {Object.keys(product.sizes).map(size => (
                            product.sizes[size] && (
                                <div
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`border p-4 cursor-pointer ${selectedSize === size ? "bg-red-500 text-white" : "bg-gray-100"
                                        }`}
                                >
                                    {size}
                                </div>
                            )
                        ))}

                    </div>
                </div>

                <button onClick={handleAddToCart} className='bg-red-500 text-white px-6 py-3 my-4 w-max'>
                    ADD To Cart
                </button>

                <p><span className='font-semibold'>Category:</span> {product.category}</p>
                <p><span className='font-semibold'>Tags:</span> Modern, Latest</p>
            </div>
        </div>
    );
};

export default ProductDisplay;
