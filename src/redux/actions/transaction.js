import { Sorting } from '../../utils'

export const setTransaction = (data) => {
    
    let payload = {
        data: Object.keys(data).map((key) => data[key]),
        loading:false
    }

    return {type:'SET_TRANSACTION',payload}
};

export const setLoadingQuery = () => {
    return {type:'SET_LOADING_QUERY'}
}

export const getQueryData = (search, sort, data) => {
    let tmp = data

    if(sort.key != 'default'){
        tmp = data.sort(Sorting(sort.name, sort.key))
    }
    
    if(search){
        search = search.toLowerCase()

        tmp = tmp.filter(({beneficiary_name, beneficiary_bank, sender_bank, amount}) => 
            beneficiary_name.toLowerCase().indexOf(search) > -1 || beneficiary_bank.indexOf(search) > -1 || sender_bank.indexOf(search) > -1 || String(amount).indexOf(search) > -1
        )
    }

    return tmp
}

export const setQueryTransaction = (payload) => {

    return {type:'SET_QUERY_TRANSACTION',payload}
}
