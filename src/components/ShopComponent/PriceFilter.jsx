
import ReactSlider from 'react-slider';
import { useState } from 'react';
import { GrPowerReset } from 'react-icons/gr';

// eslint-disable-next-line react/prop-types
const PriceFilter = ({ setMinPrice, setMaxPrice }) => {
    const [range, setRange] = useState([0, 1000]);

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


    const handleSliderChange = (value) => {
        setRange(value);
    };
    const handelFilter = () => {

        setMaxPrice(range[1])
        setMinPrice(range[0])
    }
    const handleReset = () => {
        setRange([0, 1000]); // Reset the range
        setMaxPrice(1000);  // Reset max price
        setMinPrice(0);     // Reset min price
    };

    return (
        <div className=" text-black my-5 space-y-3 border-b-2 pb-4">
            <h2 className=' border-black text-lg font-semibold '> Price</h2>
            <div className=' flex items-center justify-between py-3'>
                <p className="text-sm ">সর্বোচ্চ দাম ১০০০ টাকা </p>
                <button onClick={handleReset} className=' hover:text-primary'><GrPowerReset /></button>
            </div>
            <ReactSlider
                className="horizontal-slider w-full h-1 my-5 rounded-full"  // Added background for the line
                thumbClassName="thumb bg-black rounded-full w-4 h-4 pb-1"  // Style the thumbs
                trackClassName="track bg-black h-1 mt-[6px]"  // Style the selected range
                min={0}
                max={1000}
                value={range}
                onChange={handleSliderChange}
                renderThumb={(props) => <div {...props}></div>}
            />
           
            <div className="mt-4 flex justify-between items-center gap-2 my-4 py-3 ">
                <span className=' border p-3 w-full'>
                     {convertToBengaliNumber(range[0])} টাকা
                </span>
                -
                <span className=' border p-3 w-full'>
                     {convertToBengaliNumber(range[1])} টাকা
                </span>
            </div>

            <button onClick={handelFilter} className=' btn btn-sm rounded-sm bg-primary text-black mt-5 ' style={{ width: '100%' }}>Filter</button>
        </div>
    );
};

export default PriceFilter;
