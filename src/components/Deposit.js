import { useState } from "react";

export default function Deposit(props) {
  
  const [deposit, setDeposit] = useState(0.00);
  const [error, setError] = useState(<></>);
  const [redirect, setRedirect] = useState(<></>);

  const handleSubmit = (event) => {
   
    event.preventDefault();

    props.login.balance = (props.login.balance + deposit);
    props.users.set(props.login.username, props.login);

    props.setLogin(props.login);
    props.setUsers(props.users);
    setError(<p>{props.login.balance}</p>);
    setRedirect(<p>Transaction Successful!</p>);
  }

	return (
		<div className="deposit">
			<h1 style={{ paddingLeft:260 }}>Deposit Page</h1>
      <form style={{ paddingLeft:250 }}>
        <label htmlFor="deposit-input">Deposit Amount:</label>
        <input type="number" id="deposit-input" name="deposit-input"
          value={deposit} onChange={event => setDeposit(Number(event.target.value))}></input>
        
        <br/>
        
        <button className="btn-primary" type="submit" onClick={handleSubmit}>Submit</button>
      </form>
      <br></br>
      {error}
      {redirect}
			<form style={{ paddingLeft:250 }} action="/atmChoices/">
    			<input className="btn-primary" type="submit" value="Home" />
			</form>
		</div>
	);
}