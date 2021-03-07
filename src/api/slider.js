import api from './api'
import userStorage from './localstorage';

const product_url = 'api/sliders';

const getSlides = () => {
    return api.get(`${product_url}/all`, {
        headers: {
            'Authorization':`Bearer ${userStorage.get.token()}`,
        }
    });
};

const addSlide = (img_src) => {
    return api.post(`${product_url}/new`, {img_src : img_src}, {
        'headers': {
            'Authorization':`Bearer ${userStorage.get.token()}`,
        }
    });
};

export {
    getSlides,
    addSlide
};