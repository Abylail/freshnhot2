import api from './api'

const url = 'api/categories/';

const getList = () => {
    return api.get(url+'all',{})
};

const addCategory = (category, token) => {
    return api.post(url+'new', category,{
        'headers': {
            'Authorization':`Bearer ${token}`
        }
    });
}

export {
    getList,
    addCategory
}