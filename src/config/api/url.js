import appConfig from "../appConfig";

export const config = appConfig;

const baseUrl = {
  transaction:`${config.url.api}frontend-test`
};

export default baseUrl;