function TransactionList({ transactions, deleteTransaction}) {
    return(
        <div>
            <h3>Transactions</h3>
            <ul>
                {/*Loop through each transaction */}
                {transactions.map((t)=> (
                    <li key={t.id}>
                        {t.text}-£{t.amount}
                        {/*Button to delete transaction */}
                        <button onClick={()=> deleteTransaction(t.id)}>
                            x
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default TransactionList;