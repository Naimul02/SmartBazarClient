/* eslint-disable react/prop-types */

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// const [currentPage,setPage]= useState(1)

const PaginationButton = ({ totalPages, setPage, currentPage }) => {




    const pageNumbers = [...Array(totalPages).keys()].map(i => i + 1); // Generate an array of page numbers (1, 2, 3, ...)

    return (
        <div className="flex items-center justify-center space-x-2 lg:p-5 md:p-4 p-1">
            {/* Prev Button */}
            <button
                onClick={() => currentPage > 1 && setPage(currentPage - 1)}  // Only decrease page if it's greater than 1
                className={`bg-gray-900 text-white p-2 rounded-sm   ${currentPage === 1 ?'cursor-not-allowed bg-opacity-50':  ' hover:bg-primary hover:text-black'}`}
                disabled={currentPage === 1}  // Disable if on the first page
            >
              <IoIosArrowBack />

            </button>

            {/* Page Numbers */}
            {pageNumbers.map(number => (
                <button
                    key={number}
                    onClick={() => setPage(number)}
                    className={` px-2 p-1 border hover:border-opacity-0  ${number === currentPage ? 'bg-primary text-black ' : ' text-black bg-white border border-black'}`}  // Highlight the current page
                >
                    {number}
                </button>
            ))}

            {/* Next Button */}
            <button
                onClick={() => currentPage < totalPages && setPage(currentPage + 1)}  // Only increase page if it's less than totalPages
                className={` text-white p-2 rounded-sm bg-gray-900   ${currentPage === totalPages?'cursor-not-allowed bg-opacity-50':  ' hover:bg-primary hover:text-black'}`}
                disabled={currentPage === totalPages}  // Disable if on the last page
            >
              <IoIosArrowForward />
            </button>
        </div>
    );
};

export default PaginationButton;
