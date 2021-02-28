import api from './api'

const product_url = 'api/products/';
const image_url = 'api/upload_image';

const getList = () => {
    return api.get(product_url+'all',{})
};

const synchronization = (token) => {
    return api.post(product_url + 'sync',{},{
        'headers': {
            'Authorization':`Bearer ${token}`,
        }
    });
};

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
}
export { 
    getList,
    synchronization,
    uploadImage
}