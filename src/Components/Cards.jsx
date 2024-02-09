
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Cards = ({ courses, category, enrollCourse, searchTerm }) => {
  // Define state for liked courses
  const [likedCourses, setLikedCourses] = useState([]);

  // Function to toggle course like status
  const toggleLike = (courseId, courseTitle) => {
    if (likedCourses.includes(courseId)) {
      setLikedCourses(likedCourses.filter(id => id !== courseId));
      toast.warning(`Disliked course "${courseTitle}"`);
    } else {
      setLikedCourses([...likedCourses, courseId]);
      toast.success(`Liked course "${courseTitle}"`);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {courses.map(course => (
        <div key={course.id} className="bg-bgDark bg-opacity-80 w-[300px] rounded-md overflow-hidden relative transition duration-300 hover:shadow-lg">
          {course.image && course.image.url && (
            <img src={course.image.url} alt="Course Image" />
          )}
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <Link to={`/course/${course.id}`} className="text-white text-lg font-semibold leading-6">{course.title}</Link>
              <button onClick={() => toggleLike(course.id, course.title)} className="text-white">
                {likedCourses.includes(course.id) ? <FcLike fontSize="1.5rem" color="#ff0000" /> : <FcLikePlaceholder fontSize="1.5rem" color="#ff0000" />}
              </button>
            </div>
            <p className="text-white">{course.description.length > 100 ? `${course.description.substring(0, 100)}...` : course.description}</p>
            <div className="flex justify-between items-center mt-4">
              <button className="text-white rounded-md bg-[#101010] p-2" onClick={() => enrollCourse(course.id, course.title)}>
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
