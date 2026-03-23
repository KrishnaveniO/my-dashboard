import WeeklyActivity from "../components/WeeklyActivity";
import ExpenseStatistics from "../components/ExpenseStatistics";
import BalanceHistory from "../components/BalanceHistory";

const Dashboard = () => {
  return (
    <div className="p-6 grid gap-6">

      {/* 🃏 TOP SECTION */}
      <div className="grid grid-cols-3 gap-4">

        {/* My Cards */}
        <div className="col-span-2 bg-white p-4 rounded shadow">
          <h2 className="font-bold mb-3">My Cards</h2>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-5 rounded-2xl shadow-xl w-full max-w-md hover:scale-105 transition duration-300">

            <div className="flex justify-between">
              <div>
                <p className="text-xs opacity-80">Balance</p>
                <p className="text-2xl font-bold">$5,756</p>
              </div>

              <div className="text-sm font-semibold">
                BankDash
              </div>
            </div>

            {/* Chip */}
            <div className="mt-4 w-10 h-8 bg-yellow-400 rounded-md"></div>

            {/* Card Number */}
            <p className="mt-6 tracking-widest text-lg">
              3778 **** **** 1234
            </p>

            {/* Bottom */}
            <div className="flex justify-between mt-6 text-sm">

              <div>
                <p className="opacity-70 text-xs">CARD HOLDER</p>
                <p className="font-semibold">Eddy Cusuma</p>
              </div>

              <div>
                <p className="opacity-70 text-xs">VALID THRU</p>
                <p className="font-semibold">12/22</p>
              </div>

            </div>

          </div>
        </div>

        {/* Recent Transaction */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold mb-3">Recent Transaction</h2>

          <p>Deposit from my Card</p>
          <p className="text-red-500">-$850</p>

          <p className="mt-3">Deposit Paypal</p>
          <p className="text-green-500">+$2,500</p>

        </div>

      </div>

      {/* 📊 MIDDLE SECTION */}
      <div className="grid grid-cols-3 gap-4">

        <div className="col-span-2">
          <WeeklyActivity />
        </div>

        <ExpenseStatistics />

      </div>

      {/* 💰 BOTTOM SECTION */}
      <div className="grid grid-cols-3 gap-4">

        {/* Quick Transfer */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold mb-3">Quick Transfer</h2>

          <input
            className="border p-2 w-full"
            placeholder="Write Amount"
          />

          <button className="bg-blue-500 text-white px-4 py-2 mt-3 rounded">
            Send
          </button>
        </div>

        {/* Balance History (with graph) */}
        <div className="col-span-2">
          <BalanceHistory />
        </div>

      </div>

    </div>
  );
};

export default Dashboard;