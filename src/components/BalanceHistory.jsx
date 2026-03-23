import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jul", value: 400 },
  { month: "Aug", value: 600 },
  { month: "Sep", value: 300 },
  { month: "Oct", value: 700 },
  { month: "Nov", value: 500 },
  { month: "Dec", value: 800 },
  { month: "Jan", value: 650 },
];

const BalanceHistory = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold mb-4">Balance History</h2>

      <LineChart width={500} height={250} data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#3B82F6" />
      </LineChart>
    </div>
  );
};

export default BalanceHistory;