import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Carousel = () => {
    const quotes = [
        "https://i.postimg.cc/7hRsVjKQ/slider1.jpg",
        "https://i.postimg.cc/qBD54CpX/slider2.jpg",
        "https://i.postimg.cc/k41fJkPX/slider3-7f623fd1-a932-4b5c-92c7-292044869712.jpg"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeClass, setFadeClass] = useState("opacity-100 transform scale-100");
    let startX = 0;

    // Function to go to the specific slide
    const goToSlide = (index) => {
        setFadeClass("opacity-0 transform scale-95");
        setTimeout(() => {
            setCurrentIndex(index);
            setFadeClass("opacity-100 transform scale-100");
        }, 300);
    };

    // Function to go to the next slide
    const nextSlide = () => {
        goToSlide((currentIndex + 1) % quotes.length);
    };

    // Function to go to the previous slide
    const prevSlide = () => {
        goToSlide((currentIndex - 1 + quotes.length) % quotes.length);
    };

    // Handle mouse drag events
    const handleMouseDown = (event) => {
        startX = event.clientX;
    };

    const handleMouseUp = (event) => {
        const endX = event.clientX;
        if (startX > endX) {
            nextSlide();
        } else if (startX < endX) {
            prevSlide();
        }
    };

    // Auto slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 9000); // Adjust the time interval as needed (in milliseconds)

        return () => {
            clearInterval(interval); // Clear the interval on component unmount
        };
    }, [currentIndex]);

    return (
        <div
            className="relative flex items-center justify-center h-screen bg-cover bg-center text-black px-4 mt-16 transition-transform duration-500"
            style={{ backgroundImage: `url(${quotes[currentIndex]})` }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        >
            {/* Left Arrow */}
            <button
                onClick={prevSlide}
                className="absolute left-4 sm:left-6 md:left-8 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white border border-yellow-500 hover:text-yellow-500 hover:border-yellow-500 rounded-full p-2 hover:bg-transparent hover:border-transparent hover:text-transparent transition-all z-50"
            >
                <IoIosArrowBack /> {/* Left Arrow Icon */}
            </button>

            {/* Slide Content */}
            <div
                className={`flex flex-col ${currentIndex === 0
                    ? "items-start pl-8" // Left alignment for the first slide
                    : currentIndex === 1
                        ? "items-end pr-8" // Right alignment for the second slide
                        : "items-center" // Center alignment for the third slide
                    } justify-center w-full h-full text-center transition-opacity duration-500 ${fadeClass}`}
            >
                <div
                    className={`space-y-4 ${currentIndex === 0
                        ? "text-left"
                        : currentIndex === 1
                            ? "text-right"
                            : "text-center"
                        } mb-12 animate-fade-in-down`}
                >
                    {currentIndex === 0 && (
                        <>
                        {/* 1st image */}
                            <div className="pl-16"> {/* Adjusted padding for right alignment */}
                                <small className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg animate-slide-up">
                                    Summer Vage Sale
                                </small>
                                <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight animate-slide-up">
                                    Fresh fruits & <br /> vegetables
                                </h2>
                                <button className="mt-8 px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-2 bg-yellow-500 text-white border border-yellow-500 hover:bg-transparent hover:text-yellow-500 transition-all">
                                    Shop Now
                                </button>
                            </div>
                        </>
                    )}
                    {currentIndex === 1 && (
                        <>
                            <div className="pr-12 text-right"> {/* Adjusted padding for left alignment */}
                                <small className="font-semibold text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg animate-slide-up">
                                    Organic Indian Masala
                                </small>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-700 leading-tight animate-slide-up">
                                    Proud of Indian <br /> 100% packaging
                                </h2>
                                <button className="mt-8 px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-2 bg-yellow-500 text-white border border-yellow-500 hover:bg-transparent hover:text-yellow-500 transition-all">
                                    Shop Now
                                </button>
                            </div>
                        </>
                    )}
                    {currentIndex === 2 && (
                        <>
                            <div>
                                <small className=" text-xs mb-4 font-semibold text-gray-700 sm:text-sm md:text-base lg:text-2xl animate-slide-up">
                                    Top Selling!
                                </small>
                                <h2 className="text-2xl sm:text-3xl  md:text-5xl lg:text-6xl font-semibold leading-tight animate-slide-up">
                                    Fresh For  Your<br /> Health
                                </h2>
                                <button className="mt-8 px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-2 bg-yellow-500 text-white border border-yellow-500 hover:bg-transparent hover:text-yellow-500 transition-all">
                                    Shop Now
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Right Arrow */}
            <button
                onClick={nextSlide}
                className="absolute right-4 sm:right-6 md:right-8 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white border border-yellow-500 hover:text-yellow-500 hover:border-yellow-500 rounded-full p-2 hover:bg-transparent hover:border-transparent hover:text-transparent transition-all"
            >
                <IoIosArrowForward />  {/* Right Arrow Icon */}
            </button>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 flex space-x-4">
                {quotes.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-2 w-2 sm:h-3 sm:w-3 md:h-2 md:w-2 rounded-full ${index === currentIndex ? "bg-black" : "bg-yellow-400"
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
