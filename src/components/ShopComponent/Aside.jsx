import PropTypes from "prop-types";
import CategoryFilter from "./CategoryFilter";
import LocationFilter from "./LocationFilter";
import PriceFilter from "./PriceFilter";
import image from '../../assets/image/smartBazar-SideBanner.png';

const Aside = ({ setMinPrice, setMaxPrice, selectedLocation, setLocation, selectedCategory, setSelectedCategory }) => {
    return (
        <div className="w-full">
            <CategoryFilter
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
            <PriceFilter
                setMaxPrice={setMaxPrice}
                setMinPrice={setMinPrice}
            />
            <LocationFilter
                selectedLocation={selectedLocation}
                setLocation={setLocation}
            />
            <div>
                <div className="overflow-hidden group">
                    <img className="group-hover:scale-110 duration-300" src={image} alt="ShopBanner-2" />
                </div>
            </div>
        </div>
    );
};

// Prop validation
Aside.propTypes = {
    setMinPrice: PropTypes.func.isRequired,
    setMaxPrice: PropTypes.func.isRequired, 
    selectedLocation: PropTypes.string, 
    setLocation: PropTypes.func.isRequired, 
    selectedCategory: PropTypes.string, 
    setSelectedCategory: PropTypes.func.isRequired, 
};

export default Aside;
