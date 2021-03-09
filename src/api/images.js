import api from './api'
import userStorage from "@/api/localstorage";

const uploadImage = (file) => {
    let fd = new FormData();

    fd.append('image', file);

    return api.post('api/upload_image', fd, {
        'headers': {
            'Authorization':`Bearer ${userStorage.get.token()}`,
            'Content-Type':'multipart/form-data'
        }
    });
};

const deleteImage = (img_src) => {
    return api.post('api/delete_image',{img_src: img_src}, {
        'headers': {
            'Authorization':`Bearer ${userStorage.get.token()}`
        },
    })
};
export {
    uploadImage,
    deleteImage
};
