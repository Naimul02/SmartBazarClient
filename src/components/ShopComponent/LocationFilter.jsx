
import { GrPowerReset } from "react-icons/gr";
import PropTypes from "prop-types";
const LocationFilter = ({selectedLocation,setLocation}) => {
   

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
        <div className=" text-black my-5 space-y-3 border-b-2 pb-4">
            <h1 className="font-semibold text-lg mb-3">Location</h1>
            <div className=' flex items-center justify-between py-'>
                <p className="text-sm "> </p>
                <button onClick={handleReset} className=' hover:text-primary'><GrPowerReset /></button>
            </div>
            <div className="overflow-y-scroll max-h-64">
                {bangladeshDistricts.map((district, index) => (
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
                            ({convertToBengaliNumber(district.quantity)} পণ্য)
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
};

const bangladeshDistricts = [
    { location: "ঢাকা", quantity: 10 },
    { location: "গাজীপুর", quantity: 5 },
    { location: "নারায়ণগঞ্জ", quantity: 7 },
    { location: "মুন্সীগঞ্জ", quantity: 12 },
    { location: "মানিকগঞ্জ", quantity: 3 },
    { location: "কিশোরগঞ্জ", quantity: 8 },
    { location: "টাঙ্গাইল", quantity: 9 },
    { location: "নরসিংদী", quantity: 4 },
    { location: "ফরিদপুর", quantity: 6 },
    { location: "রাজবাড়ী", quantity: 11 },
    { location: "গোপালগঞ্জ", quantity: 2 },
    { location: "মাদারীপুর", quantity: 7 },
    { location: "শরীয়তপুর", quantity: 1 },
    { location: "চট্টগ্রাম", quantity: 15 },
    { location: "কক্সবাজার", quantity: 13 },
    { location: "বান্দরবান", quantity: 3 },
    { location: "রাঙামাটি", quantity: 2 },
    { location: "খাগড়াছড়ি", quantity: 4 },
    { location: "ফেনী", quantity: 9 },
    { location: "লক্ষ্মীপুর", quantity: 6 },
    { location: "নোয়াখালী", quantity: 10 },
    { location: "চাঁদপুর", quantity: 5 },
    { location: "কুমিল্লা", quantity: 14 },
    { location: "ব্রাহ্মণবাড়িয়া", quantity: 8 },
    { location: "সিলেট", quantity: 7 },
    { location: "মৌলভীবাজার", quantity: 3 },
    { location: "হবিগঞ্জ", quantity: 2 },
    { location: "সুনামগঞ্জ", quantity: 1 },
    { location: "বরিশাল", quantity: 12 },
    { location: "পটুয়াখালী", quantity: 6 },
    { location: "ভোলা", quantity: 9 },
    { location: "পিরোজপুর", quantity: 4 },
    { location: "বরগুনা", quantity: 7 },
    { location: "ঝালকাঠি", quantity: 3 },
    { location: "খুলনা", quantity: 10 },
    { location: "যশোর", quantity: 8 },
    { location: "সাতক্ষীরা", quantity: 5 },
    { location: "বাগেরহাট", quantity: 6 },
    { location: "মাগুরা", quantity: 2 },
    { location: "নড়াইল", quantity: 4 },
    { location: "কুষ্টিয়া", quantity: 9 },
    { location: "চুয়াডাঙ্গা", quantity: 7 },
    { location: "মেহেরপুর", quantity: 3 },
    { location: "ঝিনাইদহ", quantity: 5 },
    { location: "রাজশাহী", quantity: 11 },
    { location: "নাটোর", quantity: 6 },
    { location: "চাঁপাইনবাবগঞ্জ", quantity: 2 },
    { location: "পাবনা", quantity: 4 },
    { location: "বগুড়া", quantity: 8 },
    { location: "জয়পুরহাট", quantity: 3 },
    { location: "সিরাজগঞ্জ", quantity: 7 },
    { location: "নওগাঁ", quantity: 5 },
    { location: "রংপুর", quantity: 12 },
    { location: "দিনাজপুর", quantity: 10 },
    { location: "পঞ্চগড়", quantity: 2 },
    { location: "ঠাকুরগাঁও", quantity: 4 },
    { location: "গাইবান্ধা", quantity: 6 },
    { location: "লালমনিরহাট", quantity: 3 },
    { location: "নীলফামারী", quantity: 5 },
    { location: "কুড়িগ্রাম", quantity: 1 },
    { location: "ময়মনসিংহ", quantity: 9 },
    { location: "শেরপুর", quantity: 2 },
    { location: "জামালপুর", quantity: 4 },
    { location: "নেত্রকোনা", quantity: 8 }
];

export default LocationFilter;
