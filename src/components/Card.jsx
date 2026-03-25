const Card = ({ isDark, name, balance, number }) => {
  return (
    <div
      className={`w-full p-5 rounded-2xl shadow ${
        isDark
          ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
          : "bg-white"
      }`}
    >
      <p className={`text-sm ${!isDark && "text-gray-500"}`}>Balance</p>
      <h3 className="text-xl font-bold">{balance}</h3>

      <div className="mt-4">
        <p className="text-sm">{name}</p>
        <p className={`text-xs ${!isDark && "text-gray-500"}`}>
          {number}
        </p>
      </div>
    </div>
  );
};

export default Card;