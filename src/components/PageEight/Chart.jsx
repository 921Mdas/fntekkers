// Bar chart with stacked bars using Recharts
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  ResponsiveContainer, 
  Legend 
} from 'recharts';

function MyBarChart() {
  // Control bar width
  const barSize = 120;

  // Sample data for chart rendering
  const data = [
    {
      name: "Other Models",
      PIMCO: 10,
      UBS: 10,
      NATIXIS: 8,
      NUVEEN: 8,
    },
    {
      name: "Fintekkers",
      MODEL: 10,
    },
  ];

  return (
    <div style={{ width: '100%', height: '100%' }}>
      {/* Custom legends */}
      <div className="legends">
        <div className="cost">
          <p>Cost</p>
        </div>
      </div>

      {/* Responsive Recharts bar chart */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          {/* Grid lines */}
          <CartesianGrid strokeDasharray="none" strokeOpacity={0.3} />

          {/* Axes and interactivity */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

          {/* Stacked Bars for 'Other Models' */}
          <Bar dataKey="UBS" stackId="a" fill="#1f4976" barSize={barSize} />
          <Bar dataKey="PIMCO" stackId="a" fill="#db5602" barSize={barSize} />
          <Bar dataKey="NATIXIS" stackId="a" fill="rgba(255, 204, 0, 0.848)" barSize={barSize} />
          <Bar dataKey="NUVEEN" stackId="a" fill="#fc6459" barSize={barSize} />

          {/* Stacked Bar for 'Fintekkers' */}
          <Bar dataKey="MODEL" stackId="b" fill="#02afaa" barSize={barSize} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MyBarChart;