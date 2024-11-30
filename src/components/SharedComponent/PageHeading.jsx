import React from 'react';
import PropTypes from 'prop-types'; // PropTypes ইমপোর্ট করুন
import { Link } from 'react-router-dom';
import image from '../../assets/image/pageHeadingImage.jpg';

const PageHeading = ({ pathName, path, img }) => {
    return (
        <div>
            <div
                className="relative lg:min-h-[100px] md:min-h-[60px] min-h-8 bg-cover bg-center flex flex-col justify-center items-start"
                style={{ backgroundImage: `url(${img || image})` }}
            >
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="relative z-0 mt-16 space-y-6 pb-5 h-full tex text-white  font-semibold flex justify-center items-center w-full ">
                    <div
                        className=" px-10 py-1 bg-gradient-to-r from-transparent via-black to-transparent "
                    >
                        {path?.map((item, i) => (
                            <Link
                                className="hover:text-gray-200 hover:text-color-s mr-2"
                                key={i}
                                to={item}
                            >
                                {i === 0 ? '' : ' /'} {pathName?.[i] ?? 'Unknown'}
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

// PropTypes দিয়ে props validation করুন
PageHeading.propTypes = {
    pathName: PropTypes.arrayOf(PropTypes.string),
    path: PropTypes.arrayOf(PropTypes.string),
    img: PropTypes.string,
};




export default PageHeading;
