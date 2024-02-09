
import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from  "../Components/CartItem"
import { toast } from 'react-toastify'; // Import toast

const Cart = ({ cart, onRemove }) => {
  return (
    <div className="bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Enrolled Courses</h2>
          <Link to="/" className="text-white bg-gray-800 rounded-md px-4 py-2 hover:bg-gray-700 transition duration-300">
            Go to Home
          </Link>
        </div>
        {cart && cart.length === 0 ? (
          <p className="text-gray-600 text-lg">Your cart is empty</p>
        ) : (
          <ul className="divide-y divide-gray-300">
            {cart.map(course => (
              <li key={course.id}>
                <CartItem course={course} onRemove={onRemove} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;