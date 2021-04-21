import { Link, Redirect } from "react-router-dom";
import { isLoggedIn } from "../components/CheckLogin";

export default function AccountBalance(props) {

  return (!isLoggedIn(props.login)) ?
    <Redirect to="/atm"/> : 

    <div className="recent_transactions">
      <h1 style={{ paddingLeft:300 }}>Accounts Page</h1>

      <ul>
        <li>
          <h2 style={{ paddingLeft:250 }}>Name:</h2>
          <p style={{ paddingLeft:250 }}>{props.login.name}</p>
        </li>

        <li>
          <h2 style={{ paddingLeft:250 }}>Current Balance:</h2>
          <p style={{ paddingLeft:250 }}>${props.login.balance}</p>
        </li>

      </ul>
      
      <Link to="/atmChoices" style={{ paddingLeft:300 }}>
          <button className="btn-success" type="button">
            ATM Menu
          </button>
      </Link>
    </div>
  ;
}