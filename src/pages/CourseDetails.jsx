
// export default CourseDetails;
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CourseDetails = ({ courses }) => {
  const { id } = useParams();
  const course = courses.find((course) => course.id === id);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="course-details">
      <h2>
        <Link to={`/courses/${course.id}`}>{course.name}</Link>
      </h2>
      <p><strong>Description:</strong> {course.description}</p>
      <p><strong>Instructor:</strong> John Doe</p>
      <p><strong>Enrollment Status:</strong> Open for enrollment</p>
      <p><strong>Duration:</strong> 4 weeks</p>
      <p><strong>Schedule:</strong> Monday and Wednesday 6-8pm</p>
      <p><strong>Location:</strong> Virtual Classroom</p>
      <p><strong>Prerequisites:</strong> None</p>
      <p><strong>Syllabus:</strong> Week 1: Introduction to Course - Week 2: Hands-on Projects - Week 3: Final Project</p>
      <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center mt-4">
        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"/></svg>
        <span>Go to Home</span>
      </Link>
    </div>
  );
};

export default CourseDetails;
