const ProductSection = () => {
    return (
        <div className="px-4 md:px-8 lg:px-24 my-10">
            <div className="flex flex-col md:flex-row gap-8">
                {/* First Image Section */}
                <div className="relative w-full md:w-1/2 group">
                    <img
                        src="https://i.postimg.cc/SsGMJywp/banner-1.jpg"
                        alt="Fresh Fruit"
                        className="w-full h-64 md:h-full object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex flex-col items-start justify-center p-4 md:p-6 text-black">
                        <h2 className="text-lg md:text-2xl font-semibold mb-4">
                            Fresh fruit, vegetable
                            <br className="block md:hidden lg:block" /> {/* Visible on mobile and laptop */}
                            on our product
                        </h2>
                        <button className="mt-4 md:mt-8 px-3 py-2 md:px-5 md:py-3 bg-yellow-500 text-white border border-yellow-500 hover:bg-transparent hover:text-yellow-500 transition-all">
                            Shop Now
                        </button>
                    </div>
                </div>

                {/* Second Image Section */}
                <div className="relative w-full md:w-1/2 group">
                    <img
                        src="https://i.postimg.cc/YSPpRTYm/banner-3.jpg"
                        alt="Vegetable on Our Product"
                        className="w-full h-64 md:h-full object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex flex-col items-start justify-center p-4 md:p-6 text-black">
                        <h2 className="text-lg md:text-2xl font-semibold mb-4">
                            Vegetable eggplant
                            <br className="block md:hidden lg:block" /> {/* Visible on mobile and laptop */}
                            100% fresh food
                        </h2>
                        <button className="mt-4 md:mt-8 px-3 py-2 md:px-5 md:py-3 bg-yellow-500 text-white border border-yellow-500 hover:bg-transparent hover:text-yellow-500 transition-all">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSection;
