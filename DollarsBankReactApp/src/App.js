import React, {useReducer} from 'react';
import {Card,Button} from 'react-bootstrap';

function App() {

  function reducer(state, action) {
    console.log('Action: ', action);
    console.log('State: ', state);
    switch (action.type) {
      case "CHECKBALANCE":
        return {};
      case "PRINTTRANSACTIONS":
        return {};
      case "UPDATEPIN":
        return {};
      case "WITHDRAW":
        return {
          ...state,
          total: state.total - action.payload,
          withdrawAmount: action.payload
        };
      case "DEPOSIT":
        return {
          ...state,
          total: state.total + action.payload,
          depositAmount: action.payload
        };
      default:
        return state;    
    }
  }

  const initialState = {
    depositAmount: 0,
    withdrawAmount: 0,
    total: 100,
    isDeposit: false,
    isWithdraw: false
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  //dispatch({type: 'DEPOSIT', payload: 20});

  // JSX
  return <Card className="container">
  <Card.Header>William's Bank</Card.Header>
  <Card.Body>
    
    <Button onClick={() => dispatch({type: 'CHECKBALANCE', payload: 20})} variant="warning">Check Balance</Button> {' '}
    <Button onClick={() => dispatch({type: 'PRINTTRANSACTIONS', payload: 20})} variant="secondary">Print Transactions</Button>{' '}
    <Button onClick={() => dispatch({type: 'UPDATEPIN', payload: 20})} variant="success">Update PIN</Button>{' '}
    <Button onClick={() => dispatch({type: 'WITHDRAW', payload: 20})} variant="primary">Withdraw</Button>{' '}
    <Button onClick={() => dispatch({type: 'DEPOSIT', payload: 20})} variant="danger">Deposit</Button>
    <p>Your total balance is <br>$100 USD</br></p>
  </Card.Body>
</Card>

}

export default App;