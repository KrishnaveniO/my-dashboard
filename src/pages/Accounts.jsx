import React from "react";

const Accounts = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">

      {/* 🔷 TOP CARDS */}
      <div className="grid grid-cols-4 gap-4">

        <div className="bg-white p-4 rounded-2xl shadow">
          <p className="text-gray-500 text-sm">My Balance</p>
          <h2 className="text-xl font-bold">$12,750</h2>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow">
          <p className="text-gray-500 text-sm">Income</p>
          <h2 className="text-xl font-bold">$5,600</h2>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow">
          <p className="text-gray-500 text-sm">Expense</p>
          <h2 className="text-xl font-bold">$3,460</h2>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow">
          <p className="text-gray-500 text-sm">Total Saving</p>
          <h2 className="text-xl font-bold">$7,920</h2>
        </div>

      </div>

      {/* 🔷 SECOND ROW */}
      <div className="grid grid-cols-3 gap-4">

        {/* Last Transaction */}
        <div className="col-span-2 bg-white p-4 rounded-2xl shadow">
          <h2 className="font-bold mb-4">Last Transaction</h2>

          <div className="space-y-3 text-sm">

            <div className="flex justify-between">
              <span>Spotify Subscription</span>
              <span className="text-red-500">-$150</span>
            </div>

            <div className="flex justify-between">
              <span>Mobile Service</span>
              <span className="text-red-500">-$340</span>
            </div>

            <div className="flex justify-between">
              <span>Emily Wilson</span>
              <span className="text-green-500">+$780</span>
            </div>

          </div>
        </div>

        {/* My Card */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-5 rounded-2xl shadow">
          <h2 className="font-bold mb-3">My Card</h2>

          <p className="text-sm opacity-80">Balance</p>
          <h3 className="text-xl font-bold">$5,756</h3>

          <div className="flex justify-between mt-6 text-sm">
            <div>
              <p className="opacity-70 text-xs">CARD HOLDER</p>
              <p>Eddy Cusuma</p>
            </div>
            <div>
              <p className="opacity-70 text-xs">VALID THRU</p>
              <p>12/22</p>
            </div>
          </div>

          <p className="mt-6 tracking-widest">3778 **** **** 1234</p>
        </div>

      </div>

      {/* 🔷 THIRD ROW */}
      <div className="grid grid-cols-3 gap-4">

        {/* Debit & Credit Overview */}
        <div className="col-span-2 bg-white p-4 rounded-2xl shadow">
          <h2 className="font-bold mb-4">Debit & Credit Overview</h2>

          {/* Fake Bars */}
          <div className="flex items-end gap-4 h-40">
            <div className="w-6 bg-blue-600 h-24 rounded"></div>
            <div className="w-6 bg-yellow-400 h-36 rounded"></div>
            <div className="w-6 bg-blue-600 h-20 rounded"></div>
            <div className="w-6 bg-yellow-400 h-28 rounded"></div>
            <div className="w-6 bg-blue-600 h-16 rounded"></div>
            <div className="w-6 bg-yellow-400 h-24 rounded"></div>
          </div>
        </div>

        {/* Invoices Sent */}
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="font-bold mb-4">Invoices Sent</h2>

          <div className="space-y-3 text-sm">

            <div className="flex justify-between">
              <span>Apple Store</span>
              <span>$450</span>
            </div>

            <div className="flex justify-between">
              <span>Michael</span>
              <span>$160</span>
            </div>

            <div className="flex justify-between">
              <span>Playstation</span>
              <span>$1085</span>
            </div>

            <div className="flex justify-between">
              <span>William</span>
              <span>$90</span>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};

export default Accounts;