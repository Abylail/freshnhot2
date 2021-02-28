import api from './api'

const image_url = 'api/upload_image';

const uploadImage = async (file, token) => {
    console.log("event-", file, "token-", token);
    let fd = new FormData();

    fd.append('image', file);
    console.log("fd ",fd);

    return api.post(image_url, fd, {
        'headers': {
            'Authorization':`Bearer ${token}`,
            'Content-Type':'multipart/form-data'
        }
    });
};
export default uploadImage;
