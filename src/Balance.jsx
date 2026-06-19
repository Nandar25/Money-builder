//This component receive balance as a prop
function Balance({balance}){
    return (
        <div>
            <h3>Your Balance</h3>
            {/*display balance value*/}
            <h1>£{balance}</h1>

        </div>
    );
}
export default Balance;