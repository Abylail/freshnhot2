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
    console.log("fetch",img_src);
    return api.delete('api/delete_image',{
        'headers': {
            'Authorization':`Bearer ${userStorage.get.token()}`,
            'Content-Type':'multipart/form-data'
        },
        "img_src": img_src
    })
};
export {
    uploadImage,
    deleteImage
};
