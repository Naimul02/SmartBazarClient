import React from 'react';
import PropTypes from "prop-types";
import ReactStars from "react-rating-stars-component";
import { CiHeart } from 'react-icons/ci';
import { SlHandbag } from 'react-icons/sl';
import { FaRegEye } from 'react-icons/fa';




const ProductCard = ({ data, layOutView }) => {

    return (
        <div className={`  bg-slate-50 p-2 rounded-sm   flex text-black group ${layOutView === 'grid' ? " flex-col h-64" : ' flex-row h-40'}`}>

            <div className={`  relative  ${layOutView === 'grid' ? " h-3/6" : 'w-4/12'} overflow-hidden flex  justify-center rounded-sm group/image `}>
                {
                    data?.availableOffer && (<p
                        className='bg-red-600 absolute top-1 right-1 p-5 rotate-45 z-40 text-white font-bold'
                        style={{ clipPath: 'polygon(50% 0%, 70% 29%, 98% 35%, 79% 58%, 79% 91%, 53% 75%, 21% 91%, 23% 58%, 2% 35%, 31% 28%)' }}
                    >{data?.discount}% </p>)
                }
                <img className=' h-full w-ful group-hover/image:scale-110  transition-transform duration-300' src={data?.image} alt=" product Photo" />
                <div className='absolute flex gap-3 -bottom-12 group-hover:bottom-4 duration-500 transition-all '>
                    <button className=' cart-btn'><CiHeart /></button>
                    <button className=' cart-btn '><SlHandbag /></button>
                    <button className=' cart-btn'><FaRegEye /></button>
                </div>
            </div>

            <div className="p-3">
                <h1 className=" text-sm mt-3 ">{data?.name} - <span className=' text-xs text-gray-800'>(১ {data?.unit})</span></h1>
                {
                    data?.availableOffer ? (
                        <div className="flex items-center space-x-2">
                            
                            <p>
                                দাম: <span className="font-semibold text-red-600">
                                    {(data?.price - (data?.price * data?.discount) / 100).toFixed(2)}
                                </span> টাকা
                            </p>
                         
                            <p className="line-through text-gray-500">
                                {data?.price} টাকা
                            </p>
                        </div>
                    ) : (
                        <p>
                            দাম: <span className="font-semibold">{data?.price}</span> টাকা
                        </p>
                    )
                }
                <div className=' flex items-center justify-between'>
                    <ReactStars
                        count={5}
                        value={data?.rating}
                        size={24}
                        activeColor="#1d1103"
                    />
                    <p>Reviews  (<span>{data?.comments?.length || 0})</span></p>
                </div>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    data: PropTypes.object.isRequired,
    layOutView: PropTypes.string.isRequired,

};

export default ProductCard;