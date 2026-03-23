const Card = ({ title, value }) => {
  return (
    <div className="bg-blue-500 text-white p-4 rounded shadow">
      <p className="text-sm opacity-80">{title}</p>
      <h2 className="text-2xl font-bold">{value}</h2>
    </div>
  );
};

export default Card;