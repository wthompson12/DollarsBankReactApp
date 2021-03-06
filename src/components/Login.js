import { useState } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";



export default function Login(props) {
 
    const [pinNumber, setPinNumber] = useState("");
    const [error, setError] = useState(<></>);
    const [redirect, setRedirect] = useState(<></>);
    

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(props);
      // //checks if the pin exists
       if (props.users.has(pinNumber)) {
        console.log();

        let tempUser = props.users.get(pinNumber);
        console.log();
        props.setLogin(tempUser);
        setRedirect(<Redirect to="/atmChoices/"/>);
        //checks if pins match
        if (tempUser.pinNumber === pinNumber) {
        
          props.setLogin(tempUser);

          //redirects to atm menu
          setRedirect(<Redirect to="/atmChoices/"/>);
        } else {
          console.log();
          setError(<p className="is-error">Pin # is incorrect!!!!</p>);
        }       
      } 
      else {
        setError(<p className="is-error">Pin # Doesn't exist!!!!</p>);
      }
    }

  return (
    <div className="login">
      <h1 style={{ paddingLeft:150 }}>Login Page</h1>
      <form style={{ paddingLeft:150 }}>
        <label htmlFor="pinNumber-input">Pin #:</label>
        <input type="text" id="pinNumber-input" name="pinNumber-input"
          value={pinNumber} onChange={event => setPinNumber(event.target.value)}></input>
        
        <br/>
        
        <button className="btn-primary" type="submit" onClick={handleSubmit}>Submit</button>
      </form>
      {error}
      {redirect}
      <br></br>
      <Link to="/atm" style={{ paddingLeft:150 }}>
          <button className="btn-success" type="button">
            Home
          </button>
      </Link>
    </div>
  );
}