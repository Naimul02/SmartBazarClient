
import PropTypes from "prop-types";

// Map English categories to Bengali categories
const categoriesFromDatabase = [
  { english: "Vegetables", bengali: "শাকসবজি" },
  { english: "Fruits", bengali: "ফল" },
  { english: "Spices", bengali: "মশলা " },
];

const CategoryFilter = ({setSelectedCategory,selectedCategory}) => {
  

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
            checked={selectedCategory === "all"}
            onChange={() => filterCategories("all")}
            className="h-4 w-4 border-2 border-gray-100 text-blue-500 rounded-sm" // Square styling
          />
          <label htmlFor={"all"} className="text-lg"> সবকিছু </label>
        </div>

        {/* Render category list with checkboxes */}
        {categoriesFromDatabase.map((category, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              type="checkbox"
              id={category.english}
              name="category"
              value={category.english}
              checked={selectedCategory === category.english}
              onChange={() => filterCategories(category.english)}
              className="h-4 w-4 border-2 border-gray-100 text-blue-500 rounded-sm" // Square styling
            />
            <label htmlFor={category.english} className="text-lg">{category.bengali}</label>
          </div>
        ))}
      </div>
    </div>
  );
};
CategoryFilter.propTypes = {
  selectedCategory: PropTypes.string, 
  setSelectedCategory: PropTypes.func.isRequired, 
};

export default CategoryFilter;
