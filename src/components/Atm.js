import '../css/HeaderStyle.css';
import { Link } from "react-router-dom";

export default function Welcome() {
	return (
		<div className="atm">
			<h1 style={{ paddingLeft:150 }}>William's Legit ATM</h1>
			<br></br>
	
			<Link to="/Login" style={{ paddingLeft:150 }}>
          		<button className="btn-primary" type="button">
            		Enter Your Pin Number
          		</button>
      		</Link>
			<br></br>
			<br></br>
			<Link to="/CreatePin" style={{ paddingLeft:150 }}>
          		<button className="btn-primary" type="button">
           			 Create PIN Number
          		</button>
      		</Link>

		</div>
	);
}