import baseUrl from "./url";
import ApiRequest from "./config";

const API = {};

// transaction
API.transaction = ApiRequest.get(baseUrl.transaction);


export default API;