/* Reducer function 
    How we specify the application's state changes in response to certain actions to our store
*/

const AppReducer = (state,action) => {
    switch(action.type){
        // Here we do the action that we need to change the state
        case 'DELETE_TRANSACTION':
            return {
                ...state, // by spread operator send the current state
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)  
            }

        default: 
            return state
    }
}

export default AppReducer