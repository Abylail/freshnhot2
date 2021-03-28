import api from './api'

const url = "api/new_order";

const createOrder = order => {
    return api.post(url,order ,{})
};

export {
    createOrder
}