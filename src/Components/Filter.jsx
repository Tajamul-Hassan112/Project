
// import React from "react";

// const Filter = ({ filterData, category, setCategory }) => {
 
//     const handleCategoryChange = (newCategory) => {
//       console.log("New category selected:", newCategory);
//       setCategory(newCategory);
//     };
    

//   return (
//     <div className="w-11/12 flex flex-wrap max-w-max space-x-4 mx-auto gap-y-4 py-4 justify-center">
//       {filterData.map((data) => (
//         <button
//           className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black border-2 hover:bg-opacity-50 transition-all duration-200
//             ${
//               category === data.title
//                 ? "bg-opacity-60 border-white"
//                 : "bg-opacity-40 border-transparent"
//             }
//           `}
//           key={data.id}
//           onClick={() => handleCategoryChange(data.title)} // Update category state here
//         >
//           {data.title}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default Filter;
import React from "react";

const Filter = ({ filterData,category,setCategory}) => {
  // console.log(props);
  

  function filterHandler(title) {
    setCategory(title);
  }

  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 mx-auto gap-y-4 py-4 justify-center">
      {filterData.map((data) => {
        return (
          <button
            className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black border-2 hover:bg-opacity-50 transition-all duration-200
              ${
                category === data.title
                  ? "bg-opacity-60 border-white"
                  : "bg-opacity-40 border-transparent"
              }
            `}
            key={data.id}
            onClick={() => filterHandler(data.title)}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;