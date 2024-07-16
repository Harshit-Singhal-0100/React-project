import { motion } from "framer-motion";
import React from 'react'
export const Header = () => {
  return (
    <motion.h1
      className="mb-4 text-4xl font-bold text-center"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      Personal Finance Tracker
    </motion.h1>
  );
};
