import '../css/HeaderStyle.css';

export default function Welcome() {
	return (
		<div className="atm">
			<h1 style={{ paddingLeft:100 }}>William's Legit ATM</h1>
			<br></br>
			<form action="/Login" style={{ paddingLeft:100 }}>
    			<input className="btn-primary" type="submit" value="Login" />
			</form>

			<br/>
			<form action="/CreatePin" style={{ paddingLeft:100 }}>
    			<input className="btn-primary" type="submit" value="Create PIN Number" />
			</form>

		</div>
	);
}