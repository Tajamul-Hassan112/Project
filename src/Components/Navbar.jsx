
import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Import FaShoppingCart icon

const Navbar = ({ cart }) => {
  return (
    <nav className="bg-gray-800 py-4 px-8 flex justify-between items-center">
      <h1 className="text-white text-xl font-bold">Top Courses</h1>
      <div className='flex flex-row gap-4'>
        {/* Update the Link to point to the Dashboard page */}
        <Link to="/dashboard" className="text-white bg-gray-700 hover:bg-gray-600 rounded-md px-4 py-2 ml-4 transition duration-300">
          Dashboard
        </Link>
        <Link to="/cart" className="text-white bg-gray-700 hover:bg-gray-600 rounded-md px-4 py-2 ml-4 flex items-center transition duration-300">
          <FaShoppingCart className="mr-2" /> Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
