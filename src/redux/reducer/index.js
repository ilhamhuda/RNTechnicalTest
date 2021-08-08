import { combineReducers } from 'redux'
import transaction from './transaction'
import transactionDetail from './transactionDetail'

const reducer = combineReducers({
    transaction,
    transactionDetail
})

export default reducer