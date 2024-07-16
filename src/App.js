import React from "react";
import { Provider } from "react-redux";
import { store } from "./App/store";
import { Header } from "./components/Header";
// import { Sidebar } from "./components/Sidebar";
import Summary from "./components/Summary"; // Correct import statement
import { AddTransaction } from "./components/AddTransaction";
import { TransactionList } from "./components/TransactionList";
import { motion } from "framer-motion";

function App() {
  return (
    <Provider store={store}>
      <div className="flex">
        {/* <Sidebar /> */}
        <motion.div
          className="container mx-auto p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
          <AddTransaction />
          <Summary />
          <TransactionList />
        </motion.div>
      </div>
    </Provider>
  );
}

export default App;
