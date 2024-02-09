
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter"; // Import Filter component
import Cards from "./Components/Cards";
import Spinner from  "./Components/Spinner"
import Cart from "./pages/Cart";
import CourseDetails from "./pages/CourseDetails";
import StudentDashboard from "./pages/StudentDashboard";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  useEffect(() => {
    fetchData();
    initializeCart();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const output = await res.json();

      if (!output || typeof output.data !== "object") {
        throw new Error("Data received is not in the expected format.");
        
      }
      
      const allCourses = Object.values(output.data).flat();
      setCourses(allCourses);
    } catch (err) {
      console.error("Error fetching data:", err);
      toast.error("Failed to fetch data. Please try again later.");
    } finally {
      setLoading(false);
    }
    
  };
  

  const initializeCart = () => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  };

  const removeFromCart = (courseId) => {
    const updatedCart = cart.filter((item) => item.id !== courseId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success(`Course removed from cart successfully`);
  };

  const enrollCourse = (courseId) => {
    const courseToAdd = courses.find((course) => course.id === courseId);
    if (courseToAdd) {
      if (!cart.find((item) => item.id === courseId)) {
        const cartItem = {
          id: courseToAdd.id,
          title: courseToAdd.title,
          description: courseToAdd.description,
          image: courseToAdd.image.url,
        };
        const newCart = [...cart, cartItem];

        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
        toast.success(
          `Successfully enrolled in "${courseToAdd.title}" and added to cart`
        );
      } else {
        toast.warning("Course is already in the cart");
      }
    } else {
      toast.error("Course not found");
    }
  };
  // console.log("courses");
  // console.log(courses);

  // Function to handle changes in the search input
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter courses based on search term and category
  // Filter courses based on search term and category
 // Update the filtering logic in the App component
const filteredCourses = courses.filter(
  (course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (category === "All" ||
      (course.category &&
        course.category.toLowerCase() === category.toLowerCase()))
);

  
  

  // Conditionally render the search bar only on the home page
  const renderSearchBar = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar cart={cart} />
      <div className="container mx-auto px-4 py-8">
        {renderSearchBar && (
          <div className="mb-4 flex items-center">
            {/* Heading */}
            <h1 className="text-lg font-bold text-gray-800 mr-4">
              Find Your Course
            </h1>
            {/* Search bar */}
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="flex-1 px-2 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}
        {/* Include the Filter component */}
        <Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
        <Routes>
          <Route
            path="/"
            element={
              loading ? (
                <Spinner />
              ) : (
                <Cards
                  courses={filteredCourses}
                  category={category}
                  enrollCourse={enrollCourse}
                  cart={cart}
                  setCart={setCart}
                  searchTerm={searchTerm} // Pass the searchTerm prop
                />
              )
            }
          />
          <Route
            path="/course/:id"
            element={<CourseDetails courses={courses} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} onRemove={removeFromCart} />}
          />
          <Route
            path="/dashboard"
            element={<StudentDashboard enrolledCourses={cart} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;

