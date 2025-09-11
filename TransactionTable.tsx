import React from "react";

interface Transaction {
  id: number;
  date: string;
  description: string;
  amount: number;
  category: string;
}

interface TransactionTableProps {
  transactions: Transaction[];
}

const TransactionTable: React.FC<TransactionTableProps> = ({
  transactions,
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-xl font-bold mb-4">Transaction Details</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-gray-50">
              <th className="text-left p-3">Date</th>
              <th className="text-left p-3">Description</th>
              <th className="text-right p-3">Amount</th>
              <th className="text-left p-3">Category</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t, index) => (
              <tr key={index} className="border-b">
                <td className="p-3">{t.date}</td>
                <td className="p-3">{t.description}</td>
                <td className="p-3 text-right">₹{t.amount}</td>
                <td className="p-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                    {t.category}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
