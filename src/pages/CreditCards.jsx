import React from "react";

const CreditCards = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">

      {/* 🔷 MY CARDS */}
      <div>
        <h2 className="font-bold mb-4">My Cards</h2>

        <div className="grid grid-cols-3 gap-4">

          {/* Card 1 */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-5 rounded-2xl shadow">
            <p className="text-sm">Balance</p>
            <h3 className="text-xl font-bold">$5,756</h3>
            <p className="mt-6">Eddy Cusuma</p>
            <p className="text-sm">3778 **** **** 1234</p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-700 text-white p-5 rounded-2xl shadow">
            <p className="text-sm">Balance</p>
            <h3 className="text-xl font-bold">$5,756</h3>
            <p className="mt-6">Eddy Cusuma</p>
            <p className="text-sm">3778 **** **** 1234</p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 p-5 rounded-2xl shadow">
            <p className="text-gray-500 text-sm">Balance</p>
            <h3 className="text-xl font-bold">$5,756</h3>
            <p className="mt-6">Eddy Cusuma</p>
            <p className="text-sm text-gray-500">
              3778 **** **** 1234
            </p>
          </div>

        </div>
      </div>

      {/* 🔷 MIDDLE SECTION */}
      <div className="grid grid-cols-3 gap-4">

        {/* Expense Statistics */}
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="font-bold mb-4">Card Expense Statistics</h2>

          {/* Fake Pie */}
          <div className="w-40 h-40 rounded-full bg-gradient-to-r from-blue-500 via-pink-400 to-yellow-400 mx-auto"></div>

          <div className="mt-4 text-sm space-y-1">
            <p>DBL Bank</p>
            <p>BRC Bank</p>
            <p>ABM Bank</p>
            <p>MCP Bank</p>
          </div>
        </div>

        {/* Card List */}
        <div className="col-span-2 bg-white p-4 rounded-2xl shadow">
          <h2 className="font-bold mb-4">Card List</h2>

          <div className="space-y-3 text-sm">

            <div className="flex justify-between">
              <span>DBL Bank - ****5600</span>
              <span className="text-blue-600 cursor-pointer">
                View Details
              </span>
            </div>

            <div className="flex justify-between">
              <span>BRC Bank - ****4300</span>
              <span className="text-blue-600 cursor-pointer">
                View Details
              </span>
            </div>

            <div className="flex justify-between">
              <span>ABM Bank - ****7560</span>
              <span className="text-blue-600 cursor-pointer">
                View Details
              </span>
            </div>

          </div>
        </div>

      </div>

      {/* 🔷 BOTTOM SECTION */}
      <div className="grid grid-cols-3 gap-4">

        {/* Add New Card */}
        <div className="col-span-2 bg-white p-4 rounded-2xl shadow">
          <h2 className="font-bold mb-4">Add New Card</h2>

          <div className="grid grid-cols-2 gap-4">

            <input
              className="border p-2 rounded"
              placeholder="Card Type"
            />

            <input
              className="border p-2 rounded"
              placeholder="Name On Card"
            />

            <input
              className="border p-2 rounded"
              placeholder="Card Number"
            />

            <input
              className="border p-2 rounded"
              placeholder="Expiration Date"
            />

          </div>

          <button className="bg-blue-600 text-white px-4 py-2 mt-4 rounded">
            Add Card
          </button>
        </div>

        {/* Card Setting */}
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="font-bold mb-4">Card Setting</h2>

          <div className="space-y-3 text-sm">
            <p>Block Card</p>
            <p>Change Pin Code</p>
            <p>Add to Google Pay</p>
            <p>Add to Apple Pay</p>
            <p>Add to Apple Store</p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default CreditCards;