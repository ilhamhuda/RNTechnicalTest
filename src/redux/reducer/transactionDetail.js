const initailTransactionDetail = {
    transactionDetail:{
        loading:true,
        detailData:[],
    }  
}

const TransactionDetailReducer = (state = initailTransactionDetail, action) => {
    if(action.type === "SET_TRANSACTION_DETAIL"){
      
        return {
            ...state,
            transactionDetail:{
                ...state.transactionDetail,
                detailData : action.payload,
                loading : false
            }
        }
    } else if(action.type === "RESET_TRANSACTION_DETAIL"){
        return {
            ...state,
            transactionDetail:{
                ...state.transactionDetail,
                detailData : [],
                loading : true
            }
        }
    }

    return state
}


export default TransactionDetailReducer;
