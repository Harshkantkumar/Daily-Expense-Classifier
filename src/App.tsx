import React, { useState, useEffect } from 'react';
import Header from './Header';
import SummaryCards from './SummaryCards';
import CategorySummary from './CategorySummary';
import Charts from './Charts';
import TransactionTable from './TransactionTable';

// Sample data for demonstration
const sampleTransactions = [
  {
    id: 1,
    date: '2023-06-01',
    description: 'Grocery Shopping',
    amount: 2500,
    category: 'Groceries'
  },
  {
    id: 2,
    date: '2023-06-02',
    description: 'Movie Tickets',
    amount: 800,
    category: 'Entertainment'
  },
  {
    id: 3,
    date: '2023-06-03',
    description: 'Electricity Bill',
    amount: 1200,
    category: 'Utilities'
  },
  {
    id: 4,
    date: '2023-06-04',
    description: 'Restaurant Dinner',
    amount: 1800,
    category: 'Dining'
  },
  {
    id: 5,
    date: '2023-06-05',
    description: 'Fuel',
    amount: 1500,
    category: 'Transportation'
  },
  {
    id: 6,
    date: '2023-06-06',
    description: 'Online Course',
    amount: 3000,
    category: 'Education'
  },
];

const App: React.FC = () => {
  const [transactions, setTransactions] = useState(sampleTransactions);
  const [categoryData, setCategoryData] = useState<Array<{ category: string; amount: number; percentage: string }>>([]);
  const [dateData, setDateData] = useState<Array<{ date: string; amount: number }>>([]);
  
  // Chart colors
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#FF6B6B'];

  useEffect(() => {
    // Process transactions to get category data
    const categories = transactions.reduce<Record<string, number>>((acc, transaction) => {
      const { category, amount } = transaction;
      acc[category] = (acc[category] || 0) + amount;
      return acc;
    }, {});

    const totalAmount = transactions.reduce((sum, t) => sum + t.amount, 0);

    const categoryDataArray = Object.entries(categories).map(([category, amount]) => ({
      category,
      amount,
      percentage: ((amount / totalAmount) * 100).toFixed(1)
    }));

    setCategoryData(categoryDataArray);

    // Process transactions to get date data
    const dates = transactions.reduce<Record<string, number>>((acc, transaction) => {
      const { date, amount } = transaction;
      acc[date] = (acc[date] || 0) + amount;
      return acc;
    }, {});

    const dateDataArray = Object.entries(dates).map(([date, amount]) => ({
      date,
      amount
    }));

    setDateData(dateDataArray);
  }, [transactions]);

  // Calculate summary metrics
  const totalSpent = transactions.reduce((sum, t) => sum + t.amount, 0);
  const categoryCount = new Set(transactions.map(t => t.category)).size;
  const transactionCount = transactions.length;
  
  // Calculate average per day
  const uniqueDates = new Set(transactions.map(t => t.date)).size;
  const averagePerDay = uniqueDates > 0 ? Math.round(totalSpent / uniqueDates) : 0;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto space-y-6">
        <Header />
        
        <SummaryCards 
          totalSpent={totalSpent}
          categoryCount={categoryCount}
          transactionCount={transactionCount}
          averagePerDay={averagePerDay}
        />
        
        <Charts 
          categoryData={categoryData}
          dateData={dateData}
          colors={colors}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <CategorySummary 
              categoryData={categoryData}
              colors={colors}
            />
          </div>
          <div className="lg:col-span-2">
            <TransactionTable transactions={transactions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;