import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white h-screen p-4">

      <Link to="/" className="block mb-3">Dashboard</Link>

      <Link to="/transactions" className="block mb-3">Transactions</Link>

      <Link to="/accounts" className="block mb-3">Accounts</Link>

      <Link to="/investments" className="block mb-3">Investments</Link>

      <Link to="/credit-cards" className="block mb-3">Credit Cards</Link>

      <Link to="/loans" className="block mb-3">Loans</Link>

      <Link to="/services" className="block mb-3">Services</Link>

      <Link to="/my-privileges" className="block mb-3">My Privileges</Link>

      <Link to="/settings" className="block mb-3">Settings</Link>

    </div>
  );
};

export default Sidebar;