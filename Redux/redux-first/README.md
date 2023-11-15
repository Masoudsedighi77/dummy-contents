Here is the first exmaple of using redux in classic way(in React bank project)

first you need to make a store (see store.js file)
and you need {combineReducers, createStore} imported from redux package

     const rootReducer = combineReducer({account: accountReducer, customer: customerReducer})

    const store = createStore(rootReducer)

the first code is for combining two or more reducer functions.

Then you need to add **(feachers)** file to youre source folder for storing all features including statefull components tha need some piece of states.
for exmaple in this project in /src/features we have **accounts** and **customers** folder each of them has -slice.js file; **accountSlice.js** has everything related to states about accounts including: initialStateAcount, accountReducer function and action creatore functions.
in initialState variable you have to pass every piece of state that you need in your project about account such as balance, loan, loanPurpose and so on.
reducer function is also a pure function (has no side effect), and gives state and action as the parameters
we usually switch over action.type and declare every case of changing state **observe accountSlice.js file**
according to modern redux convention you need to specify your cases as for example: 'account/deposit', and then return the result in this situation `

    switch (action.type) {
    case "action/deposite": 
	    return {
	    ...state, balance:state.balance + action.payload
	    }
    }

then you should specify and declare action creators like:

    function deposite (amount){
    	return {type: "account/deposite", payload: amount
    }
    

after all these works you have to export default reducer function and export every action creators by name.

after installing react-redux package with `npm install react-redux`
Then in the index.js file witch is basically the entry point of react application you need to `import {Provider} from "react-redux"`
and wrap all components **see index.js file**.
And it's nearly done all you need is to go to every components that need some pieces of state and use the states by useSelector hook witch is provided by react-redux package
see the example in customer.js file.



