import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

const data = [
  { name: "Entertainment", value: 30 },
  { name: "Bill Expense", value: 20 },
  { name: "Investment", value: 35 },
  { name: "Others", value: 15 },
];

const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"];

const ExpenseChart = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold mb-4">Expense Statistics</h2>

      <PieChart width={250} height={250}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default ExpenseChart;