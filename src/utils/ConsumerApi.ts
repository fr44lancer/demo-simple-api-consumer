import axios, {AxiosInstance} from 'axios';

console.log(process.env.CONSUMER_API_BASE)
const ConsumerApi: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_CONSUMER_API_BASE,
    headers: {
        'Content-Type': 'application/json',
        'X-Road-Client': process.env.NEXT_PUBLIC_X_ROAD_CLIENT_HEADER_VALUE,
    },
});

ConsumerApi.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        const errorResponse = error.response;

        return Promise.reject(errorResponse);
    },
);

export default ConsumerApi;
