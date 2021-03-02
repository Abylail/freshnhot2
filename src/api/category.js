import api from './api'

const url = 'api/categories/';

const getList = () => {
    return api.get(url+'all',{})
};

const addCategory = (category, token) => {
    return api.post(url+'new', category, {
        'headers': {
            'Authorization':`Bearer ${token}`,
        }
    });
}

const deleteCategory = (category_id, token) => {
  return api.delete(url+category_id+'/delete',{
      'headers': {
          'Authorization':`Bearer ${token}`,
      }
  })
};

export {
    getList,
    addCategory,
    deleteCategory
}