import React from "react";
import { DollarSign, Tag, Calendar, TrendingUp } from "lucide-react";

interface SummaryCardsProps {
  totalSpent: number;
  categoryCount: number;
  transactionCount: number;
  averagePerDay: number;
}

const SummaryCards: React.FC<SummaryCardsProps> = ({
  totalSpent,
  categoryCount,
  transactionCount,
  averagePerDay,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 p-2 rounded">
            <DollarSign className="text-blue-600" size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Spent</p>
            <p className="text-xl font-bold">₹{totalSpent.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center gap-3">
          <div className="bg-green-100 p-2 rounded">
            <Tag className="text-green-600" size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-600">Categories</p>
            <p className="text-xl font-bold">{categoryCount}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center gap-3">
          <div className="bg-purple-100 p-2 rounded">
            <Calendar className="text-purple-600" size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-600">Transactions</p>
            <p className="text-xl font-bold">{transactionCount}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center gap-3">
          <div className="bg-orange-100 p-2 rounded">
            <TrendingUp className="text-orange-600" size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-600">Avg per Day</p>
            <p className="text-xl font-bold">₹{averagePerDay}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCards;