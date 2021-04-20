import { useState } from "react";

export default function Withdraw(props) {
  
  const [withdrawl, setWithdrawl] = useState(0.00);
  const [error, setError] = useState(<></>);
  const [redirect, setRedirect] = useState(<></>);


  const handleSubmit = (event) => {
   
    event.preventDefault();

    props.login.balance = (props.login.balance - withdrawl);
    props.users.set(props.login.username, props.login);

    props.setLogin(props.login);
    props.setUsers(props.users);
    setError(<p>{props.login.balance}</p>);
    setRedirect(<p>Transaction Successful!</p>);
  }

	return (
		<div className="withdraw">
			<h1 style={{ paddingLeft:260 }}>Withdrawl Page</h1>
      <form style={{ paddingLeft:260 }}>
        <label htmlFor="withdrawl-input">Withdraw Amount:</label>
        <input type="number" id="withdrawl-input" name="withdrawl-input"
          value={withdrawl} onChange={event => setWithdrawl(Number(event.target.value))}></input>
        
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