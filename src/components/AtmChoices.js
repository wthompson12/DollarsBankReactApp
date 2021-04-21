import { Link } from "react-router-dom";

export default function Home(props) {


  console.log(props.login);


	return (
		<div className="atmChoices">
			<h1 style={{ paddingLeft:250 }}>ATM Menu</h1>
			<Link to="/deposit" style={{ paddingLeft:250 }}>
          		<button className="btn-primary" type="button">
            		Deposit
          		</button>
      		</Link>
			<br></br>
			<br></br>
			<Link to="/withdraw" style={{ paddingLeft:250 }}>
          		<button className="btn-warning" type="button">
            		Withdraw
          		</button>
      		</Link>
			<br></br>
			<br></br>
			<Link to="/AccountBalance" style={{ paddingLeft:250 }}>
          		<button className="btn-info" type="button">
            		Account Balance Details
          		</button>
      		</Link>
			<br></br>
			<br></br>
			<Link to="/LogOut" style={{ paddingLeft:250 }}>
          		<button className="btn-danger" type="button">
            		Sign Out
          		</button>
      		</Link>
		</div>
	);
}