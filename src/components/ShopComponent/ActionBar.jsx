import { TfiFilter, TfiLayoutListThumb, TfiViewGrid } from "react-icons/tfi";
import PropTypes from "prop-types";
import { useState } from "react";





const ActionBar = ({ setDrawer, openDrawer, setView, layOutView,  setSortBy, setSortOrder }) => {

    const [sortValue, setSortValue] = useState('')


    const handleSortChange = (event) => {
        const value = event.target.value;
        setSortValue(value);
      
        const sortConfig = {
          "a-z": { sortBy: "name", sortOrder: "asc" },
          "z-a": { sortBy: "name", sortOrder: "desc" },
          "price-high-low": { sortBy: "price", sortOrder: "desc" },
          "price-low-high": { sortBy: "price", sortOrder: "asc" },
          "date-new-old": { sortBy: "addedDate", sortOrder: "desc" },
          "date-old-new": { sortBy: "addedDate", sortOrder: "asc" },
          "best-seller": { sortBy: "rating", sortOrder: "desc" },
        };
      
        const selectedSort = sortConfig[value];
        if (selectedSort) {
          setSortBy(selectedSort.sortBy);
          setSortOrder(selectedSort.sortOrder);
        }
      
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
                    <option value="price-high-low">Price High-Low</option>
                    <option value="price-low-high">Price Low-High</option>
                    <option value="date-new-old">Date (New-Old)</option>
                    <option value="date-old-new">Date (Old-New)</option>
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
    setSortBy: PropTypes.func.isRequired,
    setSortOrder: PropTypes.func.isRequired,
};

export default ActionBar;