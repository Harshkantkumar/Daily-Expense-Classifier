import React from "react";
import { TrendingUp } from "lucide-react";

const Header: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
            <TrendingUp className="text-blue-600" size={32} />
            Daily Expense Classifier
          </h1>
          <p className="text-gray-600 mt-2">
            Automated transaction categorization system
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
