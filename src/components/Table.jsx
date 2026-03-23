const Table = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm mt-6">
      <h2 className="text-xl font-bold mb-4">
        Recent Transactions
      </h2>

      <table className="w-full text-left">
        <thead className="border-b text-gray-500">
          <tr>
            <th className="pb-2">Name</th>
            <th className="pb-2">Date</th>
            <th className="pb-2">Amount</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b hover:bg-gray-50">
            <td className="py-3">Spotify</td>
            <td>28 Jan</td>
            <td className="text-red-500">-₹250</td>
          </tr>

          <tr className="border-b hover:bg-gray-50">
            <td className="py-3">Salary</td>
            <td>25 Jan</td>
            <td className="text-green-500">+₹2000</td>
          </tr>

          <tr className="hover:bg-gray-50">
            <td className="py-3">Recharge</td>
            <td>20 Jan</td>
            <td className="text-red-500">-₹199</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;