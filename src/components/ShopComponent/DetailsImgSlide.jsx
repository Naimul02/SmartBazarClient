/* eslint-disable react/prop-types */
import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';



// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const DetailsImgSlide = ({ images }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 bg-gray-50 px-3 w-full "
            >
                {
                    images?.map((item, i) => <SwiperSlide key={i}>
                        <img src={item} />
                    </SwiperSlide>)
                }



            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="  mySSlide mb-5"
            >
                {
                    images?.map((item, i) =>
                        <SwiperSlide key={i} className='  ' >
                            <img className=' m-auto  items-center   w-32'  src={item} />
                        </SwiperSlide>
               ) }


            </Swiper>
        </div>
    );
}


export default DetailsImgSlide;