import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Summary = () => {
  const transactions = useSelector((state) => state.transaction);

  // Calculate total income, expenses, and balance
  const calculateSummary = () => {
    let totalIncome = 0;
    let totalExpenses = 0;

    transactions.forEach((txn) => {
      if (txn.type === "income") {
        totalIncome += txn.amount;
      } else if (txn.type === "expense") {
        totalExpenses += txn.amount;
      }
    });

    const balance = totalIncome - totalExpenses;
    return { totalIncome, totalExpenses, balance };
  };

  const { totalIncome, totalExpenses, balance } = calculateSummary();

  // Function to calculate future balance with compound interest
  const calculateFutureBalance = (principal, rate, time) => {
    const interest = rate / 100;
    const amount = principal * Math.pow(1 + interest, time);
    return amount.toFixed(2);
  };

  // Function to provide investment suggestion based on balance
  const investmentSuggestion = (balance) => {
    if (balance <= 0) {
      return "Focus on reducing expenses and increasing income.";
    } else if (balance < 1000) {
      return "Consider saving in a high-interest savings account.";
    } else if (balance < 5000) {
      return "Explore mutual funds or low-risk investment options.";
    } else {
      return "Look into stocks, bonds, or real estate investments.";
    }
  };

  const futureBalance = calculateFutureBalance(balance, 5, 1); // Example: 5% annual interest rate for 1 year

  return (
    <motion.div
      className="bg-white p-4 shadow-md rounded-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">Summary</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-lg">Total Income: ${totalIncome.toFixed(2)}</p>
          <p className="text-lg">Total Expenses: ${totalExpenses.toFixed(2)}</p>
          <p className="text-lg">Balance: ${balance.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-lg">
            Future Balance (1 year, 5% interest): ${futureBalance}
          </p>
          <p className="text-lg">Investment Suggestion: {investmentSuggestion(balance)}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Summary; // Ensure Summary component is exported as default
