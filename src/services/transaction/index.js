import { API }from '../../config'
import { handleAsync } from '../../utils'

export const transaction = async (payload = {}) => {
    const [res, err] = await handleAsync(API.transaction(payload))
    if(err) throw err;
    let data =  res.axiosResponse.data
    return data;
} 


