import api from './api'

const product_url = 'api/products/'

const getList = () => {
    return api.get(product_url+'all',{})
}
export { 
    getList,
}