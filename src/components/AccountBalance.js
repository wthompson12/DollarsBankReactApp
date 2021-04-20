import { Link, Redirect } from "react-router-dom";
import { isLoggedIn } from "../components/CheckLogin";

export default function AccountBalance(props) {

  return (!isLoggedIn(props.login)) ?
    <Redirect to="/atm"/> : 

    <div className="recent_transactions">
      <h1>Accounts Page</h1>

      <ul>
        <li>
          <h2>Name:</h2>
          <p>{props.login.name}</p>
        </li>

        <li>
          <h2>Current Balance:</h2>
          <p>${props.login.balance}</p>
        </li>

      </ul>
      
      <Link to="/atmChoices/">ATM</Link>
    </div>
  ;
}