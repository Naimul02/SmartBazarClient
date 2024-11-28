import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useGetProductDetails from '../../CustomHocks/useGetProductDetails';
import PageHeading from '../SharedComponent/PageHeading';
import { Helmet } from 'react-helmet';

import ReactStars from "react-rating-stars-component";
import { TbPointFilled } from 'react-icons/tb';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { FiPlusCircle } from 'react-icons/fi';
import { CiHeart } from 'react-icons/ci';
import DetailsImgSlide from './DetailsImgSlide';



const ProductDetails = () => {
    const { id } = useParams()
    const { product, isLoading, error } = useGetProductDetails(id)
    const [quantity,setQuantity]= useState(1)

    const path = ['/', '/shop', `/product/details/${id}`]
    const pathName = ['Home', 'Shop', 'Product Details']

    const availableProduct = product?.quantity-product?.sold

    if (isLoading) return <div>Loading...</div>
    if (error) return <div> Error </div>

    return (
        <div className=' bg-white '>
            <PageHeading path={path} pathName={pathName} ></PageHeading>
            <div className='max-w'>
                <div className=' grid grid-cols-12 gap-3 w-full  py-5 '>
                    <div className='  col-span-6  '>
                    <DetailsImgSlide images= {product?.gallery || []} ></DetailsImgSlide>
                    </div>
                    <div className=' col-span-6 text-black   flex flex-col text-sm  space-y-2 mt-3'>
                        <div className="border-b-2 pb-3 flex gap-3">
                            <h1 className="font-semibold "> {product.name}  <span className=' font-normal text-sm '> (১ {product?.unit}) </span></h1>
                            <p className=' flex  gap-2 flex-row items-center text-xs '>{product.quantity - product?.sold > 0 ? <span className=' flex  gap-2 flex-row items-center '><span className=' text-green-600'><TbPointFilled /></span> স্টকে আছে</span> : <span className=' flex  gap-2 flex-row items-center '><span className=' text-green-600'><TbPointFilled /></span> স্টকে নাই</span>}</p>

                        </div>
                        <div className=' flex  justify-start gap-2 items-end my-2'>
                            <ReactStars
                                count={5}
                                value={product?.rating}
                                size={16}
                                activeColor="#f5be05"
                            />
                            <p className=' font-light'>Reviews  (<span>{product?.comments?.length || 0})</span></p>

                        </div>
                        <p className="text-sm text-gray-900 ">{product?.description}</p>
                        <div>
                            {
                                product?.tags.map((item, index) => <p
                                    key={index + item}
                                    className='bg-red-600  text-white font-bold text-sm px-3 py- inline'
                                    style={{ clipPath: 'circle(50% at 50% 50%)' }}
                                >{item}</p>)
                            }
                        </div>
                        <div>
                            {
                                product?.availableOffer ? (
                                    <div className="flex items-center space-x-2">

                                        <p className=' flex  items-center'>
                                        <span className='font-semibold'>দাম : </span>
                                             <span className="font-semibold text-xl text-red-600 px-2">
                                                {(product?.price - (product?.price * product?.discount) / 100).toFixed(2)}
                                            </span>  টাকা

                                        </p>

                                        <p className="line-through text-gray-500">
                                            {product?.price} টাকা
                                        </p>
                                        <span>
                                            {
                                                product?.availableOffer && (<p
                                                    className='bg-red-600  text-white font-bold text-sm p-3'
                                                    style={{ clipPath: 'polygon(50% 0%, 70% 29%, 98% 35%, 79% 58%, 79% 91%, 53% 75%, 21% 91%, 23% 58%, 2% 35%, 31% 28%)' }}
                                                >{product?.discount}% </p>)
                                            }
                                        </span>
                                    </div>
                                ) : (
                                    <p>
                                        <span className='font-semibold'>দাম :</span> <span className="font-semibold">{product?.price}</span> টাকা
                                    </p>
                                )
                            }
                        </div>

                        <p className=' font-light'><span className=' font-semibold'>লোকেশন :</span> {product?.location}</p>
                        <p className="font-semibold">ডেলিভারি সময় : <span className='font-normal'> {product?.deliveryTime}</span></p>
                        <div className=' flex items-center'>
                            <p className=' font-semibold'>পরিমাণ : </p>
                            <div className='flex gap-3 border border-black px-3 py-1 mx-2 text-xl'>
                                <button onClick={()=> quantity>1&& setQuantity(quantity-1)} className='hover:text-red-500 '> <AiOutlineMinusCircle /> </button>
                                <p className="">{quantity}</p>
                                <button onClick={()=> availableProduct>quantity&& setQuantity(quantity+1)} className='hover:text-red-500 ' ><FiPlusCircle /> </button>
                            </div>
                        </div>
                        <button className=' flex items-center gap-3 group text-lg font-semibold '><CiHeart className='group-hover:text-red-600' />  Wishlist </button>

                        <div className=' flex gap-4 py-3  w-full'>
                            <button className=' rounded-full p-3 bg-primary hover:bg-yellow-500 px-4 '>Add to Cart </button>
                            <button className=' rounded-full p-3 bg-gray-800 hover:bg-gray-950 px-4  text-white'>Bye It Now </button>
                        </div>
                    </div>


                </div>


            </div>
            <Helmet><title>Details || Shop || SmartBazar </title></Helmet>
        </div>
    );
};

export default ProductDetails;