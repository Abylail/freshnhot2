import api from './api'
import userStorage from './localstorage';

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

const updateStock = (list) => {
    console.log("stock api",list);
    return api.post(product_url+'update_stock',list,{
        'headers': {
            'Authorization':`Bearer ${userStorage.get.token()}`,
        }
    })
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
    updateProduct,
    updateStock
}