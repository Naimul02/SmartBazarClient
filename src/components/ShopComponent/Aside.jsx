import CategoryFilter from "./CategoryFilter";
import LocationFilter from "./LocationFilter";
import PriceFilter from "./PriceFilter";


const Aside = ({ setMinPrice, setMaxPrice }) => {
    return (
        <div className=" w-full" >

            <CategoryFilter></CategoryFilter>
            <PriceFilter
                setMaxPrice={setMaxPrice}
                setMinPrice={setMinPrice}
            ></PriceFilter>
            <LocationFilter></LocationFilter>



        </div>
    );
};

export default Aside;