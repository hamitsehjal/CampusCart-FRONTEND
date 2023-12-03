import React from "react";

//SEARCH AND ADD A NEW PRODUCT
const DashboardHeader = ({ openAddModal }) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="p-3 border rounded w-90 mr-4 ml-28"
          style={{ width: "600px" }}
        />
        <button className="bg-campus-red text-white p-3 rounded hover:bg-campus-accent mr-10">
          Search
        </button>
      </div>
      <div className="mr-4">
        <button
          onClick={openAddModal}
          className="bg-blue-500 text-white p-3 rounded hover:bg-blue-700"
        >
          Add a new product
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
