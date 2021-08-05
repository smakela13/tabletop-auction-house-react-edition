export const getAdded_ids = () => {
    const added_ids = localStorage.getItem('added_products')
      ? JSON.parse(localStorage.getItem('added_products'))
      : [];
  
    return added_ids;
  };
  
  export const add_ids = (_idArr) => {
    if (_idArr.length) {
      localStorage.setItem('added_products', JSON.stringify(_idArr));
    } else {
      localStorage.removeItem('added_products');
    }
  };
  
  export const remove_id = (_id) => {
    const add_ids = localStorage.getItem('added_product')
      ? JSON.parse(localStorage.getItem('added_product'))
      : null;
  
    if (!add_ids) {
      return false;
    }
  
    const updatedAddProductsIds = add_ids?.filter((add_id) => add_id !== _id);
    localStorage.setItem('added_product', JSON.stringify(updatedAddProductsIds));
  
    return true;
  };