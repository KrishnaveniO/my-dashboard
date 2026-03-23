const Navbar = () => {
  return (
    <div className="bg-white p-4 flex justify-between shadow">
      <h2 className="font-bold">Overview</h2>

      <input
        className="border px-3 py-1 rounded"
        placeholder="Search..."
      />
    </div>
  );
};

export default Navbar;