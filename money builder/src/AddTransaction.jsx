import { useState } from "react";

function AddTransaction({ addTransaction }) {
  // Store input values in state
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");



  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Stop page refresh
    console.log("Form submitted"); 

    // Check if fields are empty
    if (!text || !amount) return;

    // Create new transaction object
    const newTransaction = {
      id: Date.now(), // unique ID
      text,
      amount: +amount, // convert to number
    };

    // Send data to App component
    addTransaction(newTransaction);

    // Clear inputs
    setText("");
    setAmount("");
  };

  return (
    <div>
      <h3>Add Transaction</h3>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter description"
          value={text}
          onChange={(e) => setText(e.target.value)} // update state
        />

        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)} // update state
        />

        <button type="submit">Add</button>

        
      </form>
    </div>
  );
}

export default AddTransaction;