
// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import CartItem from '../Components/CartItem';

// // const Dashboard = ({ enrolledCourses, onRemove }) => {
// //   // State for search query
// //   const [searchQuery, setSearchQuery] = useState('');
  
// //   // Filter enrolled courses based on search query
// //   const filteredCourses = enrolledCourses.filter(course =>
// //     course.title.toLowerCase().includes(searchQuery.toLowerCase())
// //   );

// //   // Dummy data for demonstration purposes
// //   const upcomingDeadlines = [
// //     { course: 'Course 1', deadline: '2024-03-15' },
// //     { course: 'Course 2', deadline: '2024-03-20' },
// //     { course: 'Course 3', deadline: '2024-03-25' },
// //   ];

// //   // Dummy data for demonstration purposes
// //   const announcements = [
// //     { id: 1, title: 'New Assignment Posted', date: '2024-02-20', content: 'Please complete Assignment 3 by March 1st.' },
// //     { id: 2, title: 'Exam Schedule Update', date: '2024-02-25', content: 'The exam date for Course 2 has been changed to March 10th.' },
// //   ];

// //   return (
// //     <div className="bg-gray-100 py-8 px-4">
// //       <div className="max-w-4xl mx-auto">
// //         <div className="flex justify-between items-center mb-8">
// //           <h2 className="text-3xl font-bold text-gray-800">Enrolled Courses</h2>
// //           <div className="flex items-center">
// //             <input
// //               type="text"
// //               placeholder="Search courses"
// //               className="border-gray-300 border rounded-md px-3 py-2 mr-3"
// //               value={searchQuery}
// //               onChange={e => setSearchQuery(e.target.value)}
// //             />
// //             <Link to="/" className="text-white bg-gray-800 rounded-md px-4 py-2 hover:bg-gray-700 transition duration-300">
// //               Go to Home
// //             </Link>
// //           </div>
// //         </div>
// //         {filteredCourses.length === 0 ? (
// //           <p className="text-gray-600 text-lg">No courses found.</p>
// //         ) : (
// //           <ul className="divide-y divide-gray-300">
// //             {filteredCourses.map(course => (
// //               <li key={course.id} className="mb-8">
// //                 <CartItem course={course} onRemove={onRemove} />
// //               </li>
// //             ))}
// //           </ul>
// //         )}
// //         <div className="mt-12">
// //           <h2 className="text-2xl font-bold text-gray-800 mb-4">Upcoming Deadlines</h2>
// //           <ul>
// //             {upcomingDeadlines.map((deadline, index) => (
// //               <li key={index} className="text-gray-700 mb-2">
// //                 <span className="font-semibold">{deadline.course}: </span>{deadline.deadline}
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //         <div className="mt-12">
// //           <h2 className="text-2xl font-bold text-gray-800 mb-4">Announcements</h2>
// //           <ul>
// //             {announcements.map(announcement => (
// //               <li key={announcement.id} className="mb-4">
// //                 <h3 className="text-lg font-semibold">{announcement.title}</h3>
// //                 <p className="text-gray-700">{announcement.date}</p>
// //                 <p>{announcement.content}</p>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import CartItem from '../Components/CartItem';

// const Dashboard = () => {
//   const enrolledCourses = useSelector(state => state.cart);
  
//   // State for search query
//   const [searchQuery, setSearchQuery] = useState('');
  
//   // Filter enrolled courses based on search query
//   const filteredCourses = enrolledCourses.filter(course =>
//     course.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Dummy data for demonstration purposes
//   const upcomingDeadlines = [
//     { course: 'Course 1', deadline: '2024-03-15' },
//     { course: 'Course 2', deadline: '2024-03-20' },
//     { course: 'Course 3', deadline: '2024-03-25' },
//   ];

//   // Dummy data for demonstration purposes
//   const announcements = [
//     { id: 1, title: 'New Assignment Posted', date: '2024-02-20', content: 'Please complete Assignment 3 by March 1st.' },
//     { id: 2, title: 'Exam Schedule Update', date: '2024-02-25', content: 'The exam date for Course 2 has been changed to March 10th.' },
//   ];

//   return (
//     <div className="bg-gray-100 py-8 px-4">
//       <div className="max-w-4xl mx-auto">
//         <div className="flex justify-between items-center mb-8">
//           <h2 className="text-3xl font-bold text-gray-800">Enrolled Courses</h2>
//           <div className="flex items-center">
//             <input
//               type="text"
//               placeholder="Search courses"
//               className="border-gray-300 border rounded-md px-3 py-2 mr-3"
//               value={searchQuery}
//               onChange={e => setSearchQuery(e.target.value)}
//             />
//             <Link to="/" className="text-white bg-gray-800 rounded-md px-4 py-2 hover:bg-gray-700 transition duration-300">
//               Go to Home
//             </Link>
//           </div>
//         </div>
//         {filteredCourses.length === 0 ? (
//           <p className="text-gray-600 text-lg">No courses found.</p>
//         ) : (
//           <ul className="divide-y divide-gray-300">
//             {filteredCourses.map(course => (
//               <li key={course.id} className="mb-8">
//                 <CartItem course={course} />
//               </li>
//             ))}
//           </ul>
//         )}
//         <div className="mt-12">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Upcoming Deadlines</h2>
//           <ul>
//             {upcomingDeadlines.map((deadline, index) => (
//               <li key={index} className="text-gray-700 mb-2">
//                 <span className="font-semibold">{deadline.course}: </span>{deadline.deadline}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="mt-12">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Announcements</h2>
//           <ul>
//             {announcements.map(announcement => (
//               <li key={announcement.id} className="mb-4">
//                 <h3 className="text-lg font-semibold">{announcement.title}</h3>
//                 <p className="text-gray-700">{announcement.date}</p>
//                 <p>{announcement.content}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../Components/CartItem';

const Dashboard = ({ enrolledCourses, onRemove }) => {
  // State for search query
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter enrolled courses based on search query
  const filteredCourses = enrolledCourses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Dummy data for demonstration purposes
  const upcomingDeadlines = [
    { course: 'Course 1', deadline: '2024-03-15' },
    { course: 'Course 2', deadline: '2024-03-20' },
    { course: 'Course 3', deadline: '2024-03-25' },
  ];

  // Dummy data for demonstration purposes
  const announcements = [
    { id: 1, title: 'New Assignment Posted', date: '2024-02-20', content: 'Please complete Assignment 3 by March 1st.' },
    { id: 2, title: 'Exam Schedule Update', date: '2024-02-25', content: 'The exam date for Course 2 has been changed to March 10th.' },
  ];

  return (
    <div className="bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Enrolled Courses</h2>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search courses"
              className="border-gray-300 border rounded-md px-3 py-2 mr-3"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            <Link to="/" className="text-white bg-gray-800 rounded-md px-4 py-2 hover:bg-gray-700 transition duration-300">
              Go to Home
            </Link>
          </div>
        </div>
        {filteredCourses.length === 0 ? (
          <p className="text-gray-600 text-lg">No courses found.</p>
        ) : (
          <ul className="divide-y divide-gray-300">
            {filteredCourses.map(course => (
              <li key={course.id} className="mb-8">
                <CartItem course={course} onRemove={onRemove} />
              </li>
            ))}
          </ul>
        )}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Upcoming Deadlines</h2>
          <ul>
            {upcomingDeadlines.map((deadline, index) => (
              <li key={index} className="text-gray-700 mb-2">
                <span className="font-semibold">{deadline.course}: </span>{deadline.deadline}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Announcements</h2>
          <ul>
            {announcements.map(announcement => (
              <li key={announcement.id} className="mb-4">
                <h3 className="text-lg font-semibold">{announcement.title}</h3>
                <p className="text-gray-700">{announcement.date}</p>
                <p>{announcement.content}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;