import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../feature/Transaction/TransactionSlice";
import { motion } from "framer-motion";

const formVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export const AddTransaction = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim() && amount) {
      dispatch(
        addTransaction({
          id: Date.now(),
          description,
          type,
          amount: parseFloat(amount),
        })
      );
      setAmount("");
      setDescription("");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="text-center p-4 bg-white shadow-md rounded-md"
      variants={formVariants}
      initial="hidden"
      animate="visible"
    >
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="p-2 mr-2 border rounded"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="p-2 mr-2 border rounded"
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="p-2 mr-2 border rounded"
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button type="submit" className="p-2 text-white bg-blue-500 rounded">
        Add Transaction
      </button>
    </motion.form>
  );
};
