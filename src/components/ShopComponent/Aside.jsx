import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";


const Aside = ({ setMinPrice, setMaxPrice }) => {
    return (
        <div className=" w-full" >

            <CategoryFilter></CategoryFilter>
            <PriceFilter
                setMaxPrice={setMaxPrice}
                setMinPrice={setMinPrice}
            ></PriceFilter>



        </div>
    );
};

export default Aside;