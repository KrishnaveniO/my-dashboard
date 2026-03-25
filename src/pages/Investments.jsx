import React from "react";

const Investments = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">

      {/* 🔷 TOP CARDS */}
      <div className="grid grid-cols-3 gap-4">

        <div className="bg-white p-4 rounded-2xl shadow">
          <p className="text-gray-500 text-sm">Total Invested Amount</p>
          <h2 className="text-xl font-bold">$150,000</h2>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow">
          <p className="text-gray-500 text-sm">Number of Investments</p>
          <h2 className="text-xl font-bold">1,250</h2>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow">
          <p className="text-gray-500 text-sm">Rate of Return</p>
          <h2 className="text-xl font-bold text-green-500">+5.80%</h2>
        </div>

      </div>

      {/* 🔷 CHART SECTION */}
      <div className="grid grid-cols-2 gap-4">

        {/* Yearly Investment */}
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="font-bold mb-4">Yearly Total Investment</h2>

          {/* Fake Line Chart */}
          <div className="h-40 flex items-end gap-4">
            <div className="w-2 bg-yellow-400 h-10"></div>
            <div className="w-2 bg-yellow-400 h-20"></div>
            <div className="w-2 bg-yellow-400 h-14"></div>
            <div className="w-2 bg-yellow-400 h-32"></div>
            <div className="w-2 bg-yellow-400 h-18"></div>
            <div className="w-2 bg-yellow-400 h-24"></div>
          </div>
        </div>

        {/* Monthly Revenue */}
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="font-bold mb-4">Monthly Revenue</h2>

          {/* Fake Line Chart */}
          <div className="h-40 flex items-end gap-3">
            <div className="w-2 bg-green-400 h-12"></div>
            <div className="w-2 bg-green-400 h-20"></div>
            <div className="w-2 bg-green-400 h-10"></div>
            <div className="w-2 bg-green-400 h-28"></div>
            <div className="w-2 bg-green-400 h-24"></div>
            <div className="w-2 bg-green-400 h-32"></div>
          </div>
        </div>

      </div>

      {/* 🔷 BOTTOM SECTION */}
      <div className="grid grid-cols-2 gap-4">

        {/* My Investment */}
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="font-bold mb-4">My Investment</h2>

          <div className="space-y-4 text-sm">

            <div className="flex justify-between">
              <span>Apple Store</span>
              <span>$54,000</span>
              <span className="text-green-500">+16%</span>
            </div>

            <div className="flex justify-between">
              <span>Samsung Mobile</span>
              <span>$25,300</span>
              <span className="text-red-500">-4%</span>
            </div>

            <div className="flex justify-between">
              <span>Tesla Motors</span>
              <span>$8,200</span>
              <span className="text-green-500">+25%</span>
            </div>

          </div>
        </div>

        {/* Trending Stock */}
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="font-bold mb-4">Trending Stock</h2>

          <table className="w-full text-sm">
            <thead className="text-gray-500">
              <tr>
                <th>SL No</th>
                <th>Name</th>
                <th>Price</th>
                <th>Return</th>
              </tr>
            </thead>

            <tbody>
              <tr className="text-center">
                <td>01</td>
                <td>Trivago</td>
                <td>$520</td>
                <td className="text-green-500">+5%</td>
              </tr>

              <tr className="text-center">
                <td>02</td>
                <td>Canon</td>
                <td>$480</td>
                <td className="text-green-500">+10%</td>
              </tr>

              <tr className="text-center">
                <td>03</td>
                <td>Uber Food</td>
                <td>$350</td>
                <td className="text-red-500">-3%</td>
              </tr>

              <tr className="text-center">
                <td>04</td>
                <td>Nokia</td>
                <td>$940</td>
                <td className="text-green-500">+2%</td>
              </tr>

              <tr className="text-center">
                <td>05</td>
                <td>Tiktok</td>
                <td>$670</td>
                <td className="text-red-500">-12%</td>
              </tr>
            </tbody>
          </table>

        </div>

      </div>

    </div>
  );
};

export default Investments;