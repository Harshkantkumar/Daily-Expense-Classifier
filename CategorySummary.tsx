import React from "react";

interface CategoryData {
  category: string;
  amount: number;
  percentage: string;
}

interface CategorySummaryProps {
  categoryData: CategoryData[];
  colors: string[];
}

const CategorySummary: React.FC<CategorySummaryProps> = ({
  categoryData,
  colors,
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-xl font-bold mb-4">Category Summary</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categoryData.map((cat, index) => (
          <div key={index} className="border rounded p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold">{cat.category}</h4>
              <div
                className="w-4 h-4 rounded"
                style={{ backgroundColor: colors[index % colors.length] }}
              ></div>
            </div>
            <p className="text-xl font-bold">₹{cat.amount}</p>
            <p className="text-sm text-gray-600">{cat.percentage}% of total</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySummary;
