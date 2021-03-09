import axios from "axios"

const data_url = {
    baseURL:'https://api.freshnhot.kz/'
}

const axiosInstance = axios.create(data_url)

axiosInstance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axiosInstance.defaults.headers.common['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS, PUT, DELETE';
axiosInstance.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Accept, Authorization, X-Request-With';
// header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

const api = axios => {
    return {
        get: (url, params) => {
            return axios.get(url, { params });
        },
        getSmart: (url, params, headers) => axios.get(url,{ headers: headers, params: params}),
        post: (url, body, config) => axios.post(url, body, config),
        put: (url, body, config) => axios.put(url, body, config),
        delete: (url, config) => axios.delete(url, config)
    }
}

export default api(axiosInstance)