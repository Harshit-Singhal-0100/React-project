import { motion } from "framer-motion";
import React from 'react'
const sidebarVariants = {
  hidden: { x: "-100vw" },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
    },
  },
};

export const Sidebar = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white shadow-lg"
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="p-4 text-2xl font-bold">Menu</h2>
      <ul className="p-4">
        <li className="p-2 hover:bg-gray-700">Dashboard</li>
        <li className="p-2 hover:bg-gray-700">Transactions</li>
        <li className="p-2 hover:bg-gray-700">Summary</li>
        <li className="p-2 hover:bg-gray-700">Investments</li>
        <li className="p-2 hover:bg-gray-700">Settings</li>
      </ul>
    </motion.div>
  );
};
