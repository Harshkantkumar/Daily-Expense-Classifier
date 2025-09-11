import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ChartsProps {
  categoryData: Array<{
    category: string;
    amount: number;
    percentage: string;
  }>;
  dateData: Array<{
    date: string;
    amount: number;
  }>;
  colors: string[];
}

const Charts: React.FC<ChartsProps> = ({ categoryData, dateData, colors }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Pie Chart */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-bold mb-4">Expense by Category</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={categoryData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="amount"
              label={({ category, percentage }) =>
                `${category}: ${percentage}%`
              }
            >
              {categoryData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
            <Tooltip formatter={(value) => [`₹${value}`, "Amount"]} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-bold mb-4">Daily Spending</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dateData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip formatter={(value) => [`₹${value}`, "Amount"]} />
            <Bar dataKey="amount" fill="#0088FE" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;