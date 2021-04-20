import { useState } from "react";


export default function CreatePin(props) {
  //State constants
  const [pinNumber, setPinNumber] = useState("");
  const [pinNumber2, setPinNumber2] = useState("");
  const [name, setName] = useState("");
  const [balance, setBalance] = useState(0.00);
  const [error, setError] = useState(<></>);
  const [redirect, setRedirect] = useState(<></>);

  //form event
  const handleSubmit = (event) => {
    //immediately stops default behavior
    event.preventDefault();

    //checks if the username does NOT exist
    if (!props.users.has(pinNumber)) {
    console.log();
      //checks that passwords match
      if (pinNumber === pinNumber2) {

        //inserts entry into the users list
        props.users.set(pinNumber, {
          pinNumber:pinNumber,
          name:name,
          balance:balance
        });

        props.setUsers(props.users);
        console.log(props.users);
        setRedirect(<p className="is-success">Successfully created user!</p>);

      } else {
        setError(<p className="is-error">The pin number is not the same!!!!!!!!!!!</p>);
      }
    } else {
    setError(<p className="is-error">That pin number is already taken!!!!!!!!</p>);
    }
  }

  return (
    <div class="container" className="createpin">
      <h1 style={{ paddingLeft:250 }}>Create your Pin#</h1>
      <form style={{ paddingLeft:250 }}>
        <label>Pin#:</label>
        <input type="text" id="pinNumber-input" name="pinNumber-input"
          value={pinNumber} onChange={event => setPinNumber(event.target.value)}></input><br />

        <label htmlFor="userId-input">Verify Pin#:</label>
        <input type="text" id="pinNumber2-input" name="pinNumber2-input"
          value={pinNumber2} onChange={event => setPinNumber2(event.target.value)}></input><br />

        <label htmlFor="name-input">Name:</label>
        <input type="text" id="name-input" name="name-input"
          value={name} onChange={event => setName(event.target.value)}></input><br />
      
        <label htmlFor="balance-input">Initial Deposit:</label>
        <input type="number" id="balance-input" name="balance-input"
          value={balance} onChange={event => setBalance(event.target.value)}></input><br />

        <button className="btn-primary" type="submit" onClick={handleSubmit}>Submit</button>
      </form>
      {error}
      {redirect}
      <br></br>
      <form style={{ paddingLeft:250 }} action="/atm">
    			<input className="btn-primary" type="submit" value="Back" />
			</form>
    </div>
  );
}