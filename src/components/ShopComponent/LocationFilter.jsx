
import { GrPowerReset } from "react-icons/gr";
import PropTypes from "prop-types";
const LocationFilter = ({selectedLocation,setLocation, options}) => {
 
    const convertToBengaliNumber = (number) => {
        const englishToBengaliDigits = {
            '0': '০',
            '1': '১',
            '2': '২',
            '3': '৩',
            '4': '৪',
            '5': '৫',
            '6': '৬',
            '7': '৭',
            '8': '৮',
            '9': '৯',
        };

        return number.toString().split('').map(digit => englishToBengaliDigits[digit] || digit).join('');
    };

    const filterLocation = (location) => {
        setLocation(location);
    };

    const handleReset = () => {
        setLocation(null);
    };

    return (
        <div className=" text-black my-5 space-y-3 border-b-2 pb-4 ">
            <h1 className="font-semibold text-lg mb-3">Location</h1>
            <div className=' flex items-center justify-between py-'>
                <p className="text-sm "> </p>
                <button onClick={handleReset} className=' hover:text-primary'><GrPowerReset /></button>
            </div>
            <div className="overflow-y-scroll pr-2 max-h-64">
                {options?.map((district, index) => (
                    <div key={index} className="flex items-center justify-between space-x-2 mb-2">
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id={district.location}
                                name="category"
                                value={district.location}
                                checked={selectedLocation === district.location}
                                onChange={() => filterLocation(district.location)}
                                className="h-4 w-4 border-2 border-gray-100 text-blue-500 rounded-sm" // Square styling
                            />
                            <label htmlFor={district.location} className="text-lg">
                                {district.location}
                            </label>
                        </div>
                        <span className="text-sm">
                            ({convertToBengaliNumber(district.count)} পণ্য)
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

LocationFilter.propTypes = {
    selectedLocation: PropTypes.string, 
    setLocation: PropTypes.func.isRequired, 
    options: PropTypes.array.isRequired, 
};



export default LocationFilter;
