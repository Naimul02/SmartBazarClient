const NewsLetter = () => {
  return (
    <div
      className="md:h-[300px] h-[200px] bg-no-repeat bg-cover bg-center md:my-20 mt-3 mb-6 w-full"
      style={{
        backgroundImage: `url(//vegina-store.myshopify.com/cdn/shop/files/banner3-min.jpg?v=1613780889)`,
      }}
    >
      <div className="text-white flex md:flex-row flex-col md:py-20 py-10 justify-around items-center">
        <div></div>
        <div>
          <p className="text-2xl font-bold text-center">Get the latest deals</p>
          <p className="my-1 text-center md:text-base text-sm">
            And receive 20% off coupon for first shopping
          </p>
          <div className="w-full mt-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow py-3 pl-4 md:pr-56 pr-8 rounded-l-full border border-gray-300 focus:outline-none text-black text-sm"
            />
            <button className="bg-orange-400 text-white py-[11px] font-medium px-7 rounded-r-full border-2 border-orange-400 hover:bg-white hover:text-orange-400 text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
