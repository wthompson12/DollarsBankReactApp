import { Link } from "react-router-dom";

export default function Home(props) {


  console.log(props.login);


	return (
		<div className="atmChoices">
			<h1>Home Page</h1>
			<Link to="/deposit">Deposit Funds</Link>
			<br/>
			<Link to="/withdraw">Withdraw Funds</Link>
			<br/>
			<Link to="/AccountBalance">Accoutn Balance Details</Link>
			<br/>
			<Link to="/LogOut">Log out</Link>
		</div>
	);
}