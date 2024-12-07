import PropTypes from "prop-types";
import CategoryFilter from "./CategoryFilter";
import LocationFilter from "./LocationFilter";
import PriceFilter from "./PriceFilter";
import image from '../../assets/image/smartBazar-SideBanner.png';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../CustomHocks/useAxiosPublic";

const Aside = ({ setMinPrice, setMaxPrice, selectedLocation, setLocation, selectedCategory, setSelectedCategory }) => {
  
     const axiosPublic= useAxiosPublic()

    const {data:options}=useQuery({
        queryKey:['filteringOption '],
        queryFn: async () => {
        const res= await  axiosPublic.get('/products/getFilteringOptions')
        return  res.data
        },
    })

 
  
    return (
        <div className="w-full">
            <CategoryFilter
            options={options?.data?.categories
            }
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
            <PriceFilter
                setMaxPrice={setMaxPrice}
                setMinPrice={setMinPrice}
            />
            <LocationFilter
            options={options?.data?.locations}
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
