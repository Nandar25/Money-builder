import { useState } from 'react';
import Header from './Header';
import Balance from './Balance';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';

function App() {
  // Create state to store all transactions
  // Starts as an empty array []
  const [transactions, setTransactions] = useState([]);

  // Function to add a new transaction
  const addTransaction = (transaction) => {
    // Add new transaction to existing ones
    setTransactions([...transactions, transaction]);
  };
  //function to add delete transaction
  const deleteTransaction = (id)=> {
    //keep all items except the one we clicked
    setTransactions(transactions.filter((t) => t.id !== id));
  };
  // Get all amounts from transactions
  const amounts = transactions.map((t) => t.amount);
  //calculate total balance
  const balance = amounts.reduce((acc, item) => acc + item, 0);
  return(
    <div className='container'>
      {/*Display app title*/}
      <Header/>
      {/*Show balance and pass data as props*/}
      <Balance balance={balance}/>
      <TransactionList
      transactions={transactions}
      deleteTransaction={deleteTransaction}
      />
      {/* Form to add new transction*/}
      <AddTransaction addTransaction={addTransaction}/>
    </div>
  );
}
export default App;
