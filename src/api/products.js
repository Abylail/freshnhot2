import api from './api'

const product_url = 'api/products/';

const getList = () => {
    return api.get(product_url+'all',{})
};

const updateProduct = (product, token) => {
  return api.put(product_url+product.id+'/update',product,{
      'headers': {
          'Authorization':`Bearer ${token}`,
      }
  });
};

const synchronization = (token) => {
    return api.post(product_url + 'sync',{},{
        'headers': {
            'Authorization':`Bearer ${token}`,
        }
    });
};
export { 
    getList,
    synchronization,
    updateProduct
}