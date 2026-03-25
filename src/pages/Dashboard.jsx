import WeeklyActivity from "../components/WeeklyActivity";
import ExpenseStatistics from "../components/ExpenseStatistics";
import BalanceHistory from "../components/BalanceHistory";
import Card from "../components/Card";

const Dashboard = () => {
  return (
    <div className="p-6 grid gap-6 bg-gray-50 min-h-screen">

      {/* 🃏 TOP SECTION */}
      <div className="grid grid-cols-3 gap-4">

        {/* My Cards */}
        <div className="col-span-2 bg-white p-4 rounded-2xl shadow">

          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold">My Cards</h2>
            <p className="text-sm text-blue-600 cursor-pointer">See All</p>
          </div>

          {/* ✅ SAME SIZE */}
          <div className="grid grid-cols-2 gap-6">
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
          </div>

        </div>

        {/* Recent Transaction */}
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="font-bold mb-4">Recent Transaction</h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Deposit from my Card</span>
              <span className="text-red-500">-$850</span>
            </div>

            <div className="flex justify-between">
              <span>Deposit Paypal</span>
              <span className="text-green-500">+$2,500</span>
            </div>

            <div className="flex justify-between">
              <span>Jemi Wilson</span>
              <span className="text-green-500">+$5,400</span>
            </div>
          </div>
        </div>

      </div>

      {/* 📊 MIDDLE */}
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <WeeklyActivity />
        </div>
        <ExpenseStatistics />
      </div>

      {/* 💰 BOTTOM */}
      <div className="grid grid-cols-3 gap-4">

        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="font-bold mb-3">Quick Transfer</h2>

          <input
            className="border p-2 w-full rounded"
            placeholder="Write Amount"
          />

          <button className="bg-blue-500 text-white px-4 py-2 mt-3 rounded">
            Send
          </button>
        </div>

        <div className="col-span-2">
          <BalanceHistory />
        </div>

      </div>

    </div>
  );
};

export default Dashboard;