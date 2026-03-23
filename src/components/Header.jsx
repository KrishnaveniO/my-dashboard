const Header = () => {
  return (
    <div className="flex justify-between items-center bg-white p-5 rounded-xl shadow-sm">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <input
        type="text"
        placeholder="Search..."
        className="border p-2 rounded"
      />
    </div>
  );
};

export default Header;