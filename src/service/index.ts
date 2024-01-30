import { BASE_URL, TIMEOUT, HSY_BASE_URL } from "./config";
import jlRequest from "./request";

const jlReq = new jlRequest({
    baseURL:HSY_BASE_URL,
    timeout:TIMEOUT
})

export { jlReq }