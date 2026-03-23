import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { day: "Sat", deposit: 400, withdraw: 200 },
  { day: "Sun", deposit: 300, withdraw: 150 },
  { day: "Mon", deposit: 500, withdraw: 250 },
  { day: "Tue", deposit: 200, withdraw: 100 },
  { day: "Wed", deposit: 350, withdraw: 180 },
  { day: "Thu", deposit: 450, withdraw: 220 },
  { day: "Fri", deposit: 250, withdraw: 120 },
];

const WeeklyActivity = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold mb-4">Weekly Activity</h2>

      <BarChart width={500} height={250} data={data}>
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />

        {/* 🟢 Deposit */}
        <Bar dataKey="deposit" fill="#10B981" />

        {/* 🔴 Withdraw */}
        <Bar dataKey="withdraw" fill="#EF4444" />
      </BarChart>
    </div>
  );
};

export default WeeklyActivity;