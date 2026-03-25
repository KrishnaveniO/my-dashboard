import React from "react";
import Card from "../components/Card";

const transactions = [
  {
    name: "Spotify Subscription",
    id: "#12548796",
    type: "Shopping",
    card: "1234 ****",
    date: "28 Jan, 12:30 AM",
    amount: -2500,
  },
  {
    name: "Freepik Sales",
    id: "#12548796",
    type: "Transfer",
    card: "1234 ****",
    date: "25 Jan, 10:40 PM",
    amount: 750,
  },
  {
    name: "Mobile Service",
    id: "#12548796",
    type: "Service",
    card: "1234 ****",
    date: "20 Jan, 10:40 PM",
    amount: -150,
  },
];

const Transactions = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      <h2 className="text-2xl font-semibold mb-6">Transactions</h2>

      {/* ✅ USING REUSABLE CARDS */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <Card
          isDark={true}
          name="Eddy Cusuma"
          balance="$5,756"
          number="3778 **** **** 1234"
        />

        <Card
          isDark={false}
          name="Eddy Cusuma"
          balance="$5,756"
          number="3778 **** **** 1234"
        />

        {/* Expense Box */}
        <div className="bg-white p-5 rounded-2xl shadow">
          <h3 className="font-semibold mb-2">My Expense</h3>
          <div className="flex items-end gap-3 h-32">
            <div className="w-6 bg-gray-200 h-16 rounded"></div>
            <div className="w-6 bg-gray-200 h-20 rounded"></div>
            <div className="w-6 bg-gray-200 h-14 rounded"></div>
            <div className="w-6 bg-gray-200 h-10 rounded"></div>
            <div className="w-6 bg-green-400 h-24 rounded"></div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white p-5 rounded-2xl shadow">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-500 text-sm">
              <th className="p-2">Description</th>
              <th className="p-2">Transaction ID</th>
              <th className="p-2">Type</th>
              <th className="p-2">Card</th>
              <th className="p-2">Date</th>
              <th className="p-2">Amount</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((t, index) => (
              <tr key={index} className="border-t hover:bg-gray-50 text-sm">
                <td className="p-2">{t.name}</td>
                <td className="p-2">{t.id}</td>
                <td className="p-2">{t.type}</td>
                <td className="p-2">{t.card}</td>
                <td className="p-2">{t.date}</td>

                <td
                  className={`p-2 font-semibold ${
                    t.amount > 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {t.amount > 0 ? "+" : ""}${t.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Transactions;