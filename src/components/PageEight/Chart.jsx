import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

function MyBarChart({ data }) {
 const [first, second] = data;
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div className="legends">
        <div className="cost">
         <p> Cost</p>
         <p>Maintenance</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
         <Bar dataKey="cost" fill="#920800" /> {/* A green shade */}
         <Bar dataKey="maintenance" fill="#FF9800" /> {/* An orange shade */}

        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MyBarChart;
