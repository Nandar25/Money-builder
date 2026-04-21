import { useState } from 'react';
import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionList from"./components/TransactionList";
import AddTransaction from "./components/AddTransaction";



function App() {
  const [transactions, setTransactions] = useState([]);

  const AddTransaction=(transactions)=>{
    setTransactions([...transactions, transactions]);
  };
  //function to add delete transaction
  const deleteTransaction= (id)=> {
    //keep all items except the one we clicked
    setTransactions(transactions.filter((t)=> t.id !== id));
  };
  const amounts = transactions.map((t)=> t.amount);
  //calculate total balance
  const balance= amount.reduce((acc, item)=> acc+item, 0);
  return(
    <div className='container'>
      {/*Display app title*/}
      <Header/>
      {/*Show balance and pass data as props*/}
      <Balance balance={balance}/>
    </div>
  )
}
export default App
