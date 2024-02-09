
import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io'; // Importing IoMdClose from react-icons

const CartItem = ({ course, onRemove }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleRemove = () => {
    // Hide confirmation modal
    setShowConfirmation(false);
    // Call onRemove callback to remove the item from the cart
    onRemove(course.id);
    // Show toast notification
    //toast.success(`${course.title} removed from cart.`);
  };

  return (
    <div className="bg-bgDark bg-opacity-80 w-[400px] rounded-md overflow-hidden relative cart-item mb-4"> 
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <img className="w-full h-[150px] object-cover rounded-md" src={course.image} alt="Course Image" /> 
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold leading-6">{course.title}</h3>
          <p className="text-white">{course.description}</p>
        </div>
      </div>
     
      <div className="remove-icon" onClick={() => setShowConfirmation(true)}> 
        {/* Customizing the style of the icon */}
        <IoMdClose size={32} color="#FF0000" />
      </div>

      {showConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-md">
            <p className="text-lg text-gray-800 mb-2">Are you sure to remove this item?</p>
            <div className="flex justify-end">
              <button
                onClick={handleRemove}
                className="bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-600"
              >
                Remove
              </button>
              <button
                onClick={() => setShowConfirmation(false)}
                className="text-gray-600 px-4 py-2 rounded hover:bg-gray-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
