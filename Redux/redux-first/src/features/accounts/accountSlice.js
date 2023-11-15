// initial acconut state
const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: '',
  };
  //Reducer function
  export default function accountReducer(state = initialStateAccount, action) {
    switch (action.type) {
      case 'account/deposite':
        return {
          ...state,
          balance: state.balance + action.payload,
        };
      case 'account/withdraw':
        return {
          ...state,
          balance: state.balance - action.payload,
        };
      case 'account/requestLoan':
        if (state.loan > 0) return state;
        return {
          ...state,
          loan: action.payload.amount,
          loanPurpose: action.payload.purpose,
          balance: state.balance + action.payload.amount,
        };
      case 'account/payLoan':
        return {
          ...state,
          loanPurpose: '',
          loan: 0,
          balance: state.balance - state.loan,
        };
  
      default:
        return state;
    }
  }

  //account action creators
  function deposite(amount) {
    return { type: 'account/deposite', payload: amount };
  }
  function withdraw(amount) {
    return { type: 'account/withdraw', payload: amount };
  }
  function requestLoan(amount, purpose) {
    return { type: 'account/requestLoan', payload: { amount, purpose } };
  }
  function payLoan() {
    return { type: 'account/payLoan' };
  }
  export {initialStateAccount,deposite,withdraw,requestLoan,payLoan}