const initailTransaction = {
    transaction:{
        loading:true,
        data:[],
        dataQuery:[]
    }  
}

const TransactionReducer = (state = initailTransaction, action) => {
    if(action.type === "SET_TRANSACTION"){
      
        return {
            ...state,
            transaction:{
                ...state.transaction,
                data : action.payload.data,
                loading : action.payload.loading
            }
        }
    } else if(action.type === "SET_QUERY_TRANSACTION"){
      
        return {
            ...state,
            transaction:{
                ...state.transaction,
                loading:false,
                dataQuery:action.payload
            }
        }
    } else if(action.type === "SET_LOADING_QUERY"){
        return {
            ...state,
            transaction:{
                ...state.transaction,
                loading:true,
                dataQuery:[]
            }
        }
    }

    return state
}


export default TransactionReducer;
