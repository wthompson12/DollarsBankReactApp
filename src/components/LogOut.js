import { useEffect } from "react";
import { Redirect } from "react-router";

export default function SignOut(props) {

	useEffect(() => {
    return () => {
      if (props.login.length < 2) {
        props.setLogin([null]);
      }
    }
  }, [props]);

	return (
		<div className="logout">
			<h1>Logout</h1>
			<Redirect to="/atm"/>
		</div>
	);
}