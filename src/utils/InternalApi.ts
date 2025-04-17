import axios, {AxiosInstance} from 'axios';

console.log(process.env.In)
const InternalApi: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_INTERNAL_API_BASE,
    headers: {
        'Content-Type': 'application/json',
    },
});

InternalApi.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        const errorResponse = error.response;

        return Promise.reject(errorResponse);
    },
);

export default InternalApi;
