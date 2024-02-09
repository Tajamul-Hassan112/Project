
import React from 'react';
import { FcLikePlaceholder } from 'react-icons/fc';

const Card = ({ course, onEnroll }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 p-4 relative">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="relative">
          {course.image && course.image.url && (
            <img src={course.image.url} alt="Course Image" className="w-full h-40 object-cover" />
          )}
        </div>
        <div className="p-4">
          <p className="title text-lg font-semibold text-gray-800">{course.title}</p>
          <p className="description text-sm text-gray-600 mt-2">{course.description}</p>
          <div className="flex justify-between items-center mt-4">
            <button className="enroll-button px-4 py-2 rounded-md bg-blue-500 text-white text-sm font-semibold" onClick={() => onEnroll(course.id)}>Enroll Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
