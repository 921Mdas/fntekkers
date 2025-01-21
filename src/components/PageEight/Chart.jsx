import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';

function MyBarChart() {
  // Bar size for controlling bar width
  const barSize = 120;

  // Sample data structure with two sets of stacked bars
  const data = [
    {
      name: "Other Models",
      PIMCO:10,
      UBS: 10, // Static cost for UBS
      NATIXIS: 8, // Optional data for another bar if needed
      NUVEEN: 8, // Optional data for another bar if needed
    },
    {
      name: "Fintekkers",
      MODEL:10,
    },
  
  ];

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div className="legends">
        <div className="cost">
          <p>Cost</p>
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="none" strokeOpacity={0.3} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

          {/* First Set of Stacked Bars (Cost) */}
<Bar dataKey="UBS" stackId="a" fill="#1f4976" barSize={barSize} /> {/* Teal for Cost */}
<Bar dataKey="PIMCO" stackId="a" fill="#db5602" barSize={barSize} /> {/* Soft Pink for Maintenance */}
<Bar dataKey="NATIXIS" stackId="a" fill="rgba(255, 204, 0, 0.848)" barSize={barSize} /> {/* Lavender for Other Cost */}
<Bar dataKey="NUVEEN" stackId="a" fill="#fc6459" barSize={barSize} /> {/* Medium Slate Blue for Other Maintenance */}

<Bar dataKey="MODEL" stackId="b" fill="#02afaa" barSize={barSize} /> {/* Teal for Cost */}




          {/* Second Set of Stacked Bars (Other Cost) */}
          
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MyBarChart;
