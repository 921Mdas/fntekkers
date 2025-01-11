import React, { useEffect, useState, useRef } from "react";
import "./CostRevenue.scss";
import MyBarChart from "./Chart";

const CostRevenue = () => {
  const defaultTitles = [
    "Asset Manager : UBS",
    "Asset Manager : Natixis",
    "Retirement Advisor : Nuveen",
    "Insurance Firm : Pimco",
  ];

  const [items, setItems] = useState(
    defaultTitles.slice(0, 1).map((title, index) => ({ id: index + 1, title }))
  );

  const initialChartData = [
    { name: "Others", cost: 10, maintenance: 10, amt: defaultTitles.length * 0.1 },
    { name: "Fintekkers", cost: 0, maintenance: 0, amt: (defaultTitles.length * 0.1) / 4 },
  ];

  const [chartData, setChartData] = useState(initialChartData);
  const scrollRef = useRef(null);

  useEffect(() => {
    const element = scrollRef.current;

    const handleAddItem = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          addItemsSequentially();
        } else {
          debounceRemoveItem();
        }
      });
    };

    const observer = new IntersectionObserver(handleAddItem, {
      root: null,
      threshold: 0.5,
    });

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const addItemsSequentially = () => {
    if (items.length >= defaultTitles.length) return; // Limit items to the array length

    let currentIndex = items.length;

    const interval = setInterval(() => {
      if (currentIndex < defaultTitles.length) {
        addItem(currentIndex);
        currentIndex += 1;
      } else {
        clearInterval(interval);
      }
    }, 300); // Adjust delay for smoother animation
  };

  const addItem = (index) => {
    setItems((prevItems) => {
      if (index < defaultTitles.length && prevItems.length < defaultTitles.length) {
        return [...prevItems, { id: index + 1, title: defaultTitles[index] }];
      }
      return prevItems;
    });

    setChartData((prevChartData) =>
      prevChartData.map((data, idx) => {
        if (idx === 0) {
          return {
            ...data,
            cost: data.cost + 20,
            maintenance: data.maintenance + 10,
          };
        }
        if (idx === 1) {
          return {
            ...data,
            cost: data.cost + 5,
            maintenance: data.maintenance + 2,
          };
        }
        return data;
      })
    );
  };

  const debounceRemoveItem = () => {
    setTimeout(() => {
      removeItem();
    }, 300); // Add delay to smooth removal
  };

  const removeItem = () => {
    setItems((prevItems) => {
      if (prevItems.length > 1) {
        return prevItems.slice(0, -1);
      }
      return prevItems;
    });

    setChartData((prevChartData) =>
      prevChartData.map((data, idx) => {
        if (idx === 0 && data.cost >= 10 && data.maintenance >= 10) {
          return {
            ...data,
            cost: data.cost - 20,
            maintenance: data.maintenance - 10,
          };
        }
        if (idx === 1 && data.cost > 0 && data.maintenance > 0) {
          return {
            ...data,
            cost: data.cost - 5,
            maintenance: data.maintenance - 2,
          };
        }
        return data;
      })
    );
  };

  return (
    <div className="cost_revenue_container" ref={scrollRef}>
      <div className="cost_revenue">
        <div className="cost_rev_title">The Cost of Repeating the above Process</div>

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
