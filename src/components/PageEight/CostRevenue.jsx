import React, { useEffect, useState } from 'react';
import "./CostRevenue.scss";
import MyBarChart from './Chart';

const CostRevenue = () => {

  const defaultTitles = [
    'Asset Manager : UBS',
    'Asset Manager : Natixis',
    'Retirement Advisor : Nuveen',
    'Insurance Firm : Pimco',
  ];

  // Start with only the first title in the defaultTitles array
  const [items, setItems] = useState(
    defaultTitles.slice(0, 1).map((title, index) => ({ id: index + 1, title }))
  );

  // Set initial chart data based on the length of defaultTitles
  const initialChartData = [
    { name: '$ Repeated Security Models', uv: 0, pv: 10, amt: defaultTitles.length * 0.1 },
    { name: '$ Fintekkers Reusable Models', uv: 0, pv: 10, amt: (defaultTitles.length * 0.1) / 4 },
  ];

  const [chartData, setChartData] = useState(initialChartData);

  const addItem = () => {
    setItems((prevItems) => {
      const nextIndex = prevItems.length;
      if (nextIndex < defaultTitles.length) {
        return [
          ...prevItems,
          { id: nextIndex + 1, title: defaultTitles[nextIndex] },
        ];
      }
      return prevItems; // Prevent adding more items if titles are exhausted
    });
  };

  const removeItem = () => {
    setItems((prevItems) => {
      // Prevent removing the last item if it's the only item
      if (prevItems.length > 1) {
        return prevItems.slice(0, -1); // Remove the last item only if more than 1
      }
      return prevItems; // Keep the array as it is if it's the only item left
    });
  };

  useEffect(() => {
    // Update chartData when the number of items changes
    const repeatedModelsMaxAmt = 0.5; // Maximum value for repeated models
    const fintekkersMaxAmt = 0.2; // Maximum value for Fintekkers

    // Calculate the new values for the chart
    const newRepeatedModelsAmt = Math.min(items.length * 0.1, repeatedModelsMaxAmt);
    const newFintekkersAmt = Math.min(items.length * 0.05, fintekkersMaxAmt);

    const newChartData = [
      { name: '$ Repeated Security Models', uv: items.length * 1000, pv: 10, amt: newRepeatedModelsAmt },
      { name: '$ Fintekkers Reusable Models', uv: items.length * 500, pv: 10, amt: newFintekkersAmt },
    ];

    // Directly set the new chart data
    setChartData(newChartData);
  }, [items]);

  return (
    <div className="cost_revenue_container">
      <div className="cost_revenue">
        <div className="cost_rev_title">The Cost of Repeating the above Process</div>

        <div className="Buttons_actions">
          <button onClick={removeItem}>-</button>
          <button onClick={addItem}>+</button>
        </div>

        <div className="cost_rev_subcontainer">
          <div className="cost_rev_graphs">
            {items.map((item) => (
              <div key={item.id} className="cost_rev_item">
                <div className="cost_rev_item_title">{item.title}</div>
                <div className="cost_rev_item_elements">
                  <div>Security Model</div>
                  <div>Market Data</div>
                  <div>Ledger</div>
                  <div>P&L</div>
                  <div>Risk</div>
                </div>
              </div>
            ))}
          </div>
          <div className="cost_bar_chart">
            <MyBarChart data={chartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostRevenue;
