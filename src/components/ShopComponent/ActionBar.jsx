import { TfiFilter, TfiLayoutListThumb, TfiViewGrid } from "react-icons/tfi";
import PropTypes from "prop-types";

const ActionBar = ({ setView, layOutView, setSortValue, sortValue, setDrawer, openDrawer }) => {


    const handleSortChange = (event) => {
        setSortValue(event.target.value);

    };

    return (
        <div className=" flex   lg:flex-row md:flex-row flex-col gap-4 justify-between items-center my-6 p-2 bg-slate-50">


            <div className=" flex gap-3 justify-between w-full text-xl text-black font-semibold">
                <button onClick={() => setDrawer(!openDrawer)} className=" lg:hidden md:hidden flex mr-2 text-black font-md">
                    <TfiFilter /> Filter
                </button>
                <div className=" flex gap-4">
                    <button className={`${layOutView === 'grid' && 'text-primary'}`} onClick={() => setView('grid')}><TfiViewGrid /></button>
                    <button className={`${layOutView === 'line' && 'text-primary'}`} onClick={() => setView('line')}><TfiLayoutListThumb /></button>

                </div>
            </div>

            <div className="flex items-center space-x-2 flex-wrap w-full  ">

                <label htmlFor="sort" className="text-black font-medium">
                    Sort by:
                </label>
                <select
                    id="sort"
                    value={sortValue}
                    onChange={handleSortChange}
                    className="p-2 bg-transparent focus:outline-none  text-black "
                >
                    <option value="" disabled>
                        Select  options
                    </option>
                    <option value="a-z">A-Z</option>
                    <option value="z-a">Z-A</option>
                    <option value="price">Price</option>
                    <option value="date">Date</option>
                    <option value="best-seller">Best Seller</option>
                </select>
            </div>
        </div>
    );
};

ActionBar.propTypes = {
    setView: PropTypes.func.isRequired, 
    layOutView: PropTypes.string.isRequired, 
    setSortValue: PropTypes.func.isRequired, 
    sortValue: PropTypes.string.isRequired,
    setDrawer: PropTypes.func.isRequired, 
    openDrawer: PropTypes.bool.isRequired, 
};

export default ActionBar;