import api from './api'
import userStorage from "@/api/localstorage";

const image_url = 'api/upload_image';

const uploadImage = (file) => {
    let fd = new FormData();

    fd.append('image', file);

    return api.post(image_url, fd, {
        'headers': {
            'Authorization':`Bearer ${userStorage.get.token()}`,
            'Content-Type':'multipart/form-data'
        }
    });
};
export default uploadImage;
