import api from './api'

const url = 'api/categories/';
const subcategory_url = 'api/subcategories/';

const addSubcategory = (obj, token) => {
  return api.post(url+`${obj.category_id}/subcategories/new`,obj,{
      'headers': {
          'Authorization':`Bearer ${token}`,
      }
  });
};

const deleteSubcategory = (id, token) => {
    return api.delete(subcategory_url+id+'/delete', {
        'headers': {
            'Authorization':`Bearer ${token}`,
        }
    })
}

export {
    addSubcategory,
    deleteSubcategory
}