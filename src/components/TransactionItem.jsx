import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export const TransactionItem = ({ transaction, onDelete }) => {
  return (
    <motion.li
      className={`flex items-center justify-between p-2 ${
        transaction.type === "expense" ? "bg-red-300" : "bg-green-300"
      } rounded`}
      variants={itemVariants}
      initial="hidden"
      animate="visible"
    >
      <span>{transaction.amount}</span>
      <span>{transaction.description}</span>
      <button onClick={onDelete} className="p-1 text-white bg-red-500 rounded">
        Delete
      </button>
    </motion.li>
  );
};
