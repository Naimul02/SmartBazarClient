
import PropTypes from "prop-types";

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

const CategoryFilter = ({ setSelectedCategory, selectedCategory, options }) => {


  // Handle category selection with the checkbox
  const filterCategories = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="text-black  border-b pb-4">
      <h1 className="font-semibold text-lg mb-3">Categories</h1>
      <div className="flex flex-col gap-4 p-1">
        {/* "All" Category */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id={"all"}
            name="all"
            value={"all"}
            checked={selectedCategory === null}
            onChange={() => filterCategories(null)}
            className="h-4 w-4 border-2 border-gray-100 text-blue-500 rounded-sm" // Square styling
          />
          <label htmlFor={"all"} className="text-lg"> সবকিছু </label>
        </div>

        {/* Render category list with checkboxes */}
        {options?.map((category, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              type="checkbox"
              id={category?.category}
              name="category"
              value={category?.category}
              checked={selectedCategory === category?.category}
              onChange={() => filterCategories(category?.category)}
              className="h-4 w-4 border-2 border-gray-100 text-blue-500 rounded-sm" // Square styling
            />
           <div className="flex justify-between w-full">
           <label htmlFor={category?.category} className="text-lg">{category?.category}</label>
            <span className="text-sm">
              ({convertToBengaliNumber(category.count)} পণ্য)
            </span>
           </div>
          </div>

        ))}
      </div>
    </div>
  );
};
CategoryFilter.propTypes = {
  selectedCategory: PropTypes.string,
  setSelectedCategory: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default CategoryFilter;
