import api from './api'
import userStorage from './localstorage';

const slider_url = 'api/sliders';

const getSlides = () => {
    return api.get(`${slider_url}/all`, {});
};

const addSlide = (img_src) => {
    return api.post(`${slider_url}/new`, {img_src : img_src}, {
        'headers': {
            'Authorization':`Bearer ${userStorage.get.token()}`,
        }
    });
};


export {
    getSlides,
    addSlide
};