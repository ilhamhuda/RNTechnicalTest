
export const setTransactionDetail = (payload) => {
    return {type:'SET_TRANSACTION_DETAIL', payload}
}

export const resetTransactionDetail = () => {
    return {type:'RESET_TRANSACTION_DETAIL'}
}