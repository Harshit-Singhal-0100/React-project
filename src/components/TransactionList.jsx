import { useDispatch, useSelector } from "react-redux";
import { TransactionItem } from "./TransactionItem";
import { deleteTransaction } from "../feature/Transaction/TransactionSlice";

export const TransactionList = () => {
  const transactions = useSelector((state) => state.transaction);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredTransactions = transactions.filter(
    (txn) => filter === "all" || txn.type === filter
  );

  return (
    <ul className="space-y-2">
      {filteredTransactions.map((txn) => (
        <TransactionItem
          key={txn.id}
          transaction={txn}
          onDelete={() => dispatch(deleteTransaction(txn.id))}
        />
      ))}
    </ul>
  );
};
