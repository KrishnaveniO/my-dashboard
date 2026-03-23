import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "Jul", value: 400 },
  { name: "Aug", value: 300 },
  { name: "Sep", value: 500 },
];

const Chart = () => {
  return (
    <LineChart width={500} height={200} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="value" />
    </LineChart>
  );
};

export default Chart;