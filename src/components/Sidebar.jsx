const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white p-5 shadow">
      <h1 className="text-2xl font-bold mb-6">BankDash.</h1>

      <ul className="space-y-4">
        <li>Dashboard</li>
        <li>Transactions</li>
        <li>Accounts</li>
        <li>Investments</li>
        <li>Credit Cards</li>
        <li>Loans</li>
        <li>Services</li>
        <li>Setting</li>
      </ul>
    </div>
  );
};

export default Sidebar;