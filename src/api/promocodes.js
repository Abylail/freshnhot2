import api from './api'
import userStorage from "@/api/localstorage";

const url = 'api/promocodes/';

const getList = () => {
    return api.getSmart(url+'all', {}, {
        'Authorization':`Bearer ${userStorage.get.token()}`,
    });
};

const addPromo = promoForm => {
    return api.post(url+'new', promoForm, {
        'headers': {
            'Authorization':`Bearer ${userStorage.get.token()}`,
        }
    })
};

const deletePromo = id => {
    return api.delete(url+'delete/'+id, {
        'headers': {
            'Authorization':`Bearer ${userStorage.get.token()}`,
        }
    });
};

export {
    getList,
    addPromo,
    deletePromo
}