export const getAddedProductIds = () => {
    const addedProductIds = localStorage.getItem('added_products')
      ? JSON.parse(localStorage.getItem('added_products'))
      : [];
  
    return addedProductIds;
  };
  
  export const addProductIds = (productIdArr) => {
    if (productIdArr.length) {
      localStorage.setItem('added_products', JSON.stringify(productIdArr));
    } else {
      localStorage.removeItem('added_products');
    }
  };
  
  export const removeProductId = (productId) => {
    const addProductIds = localStorage.getItem('added_product')
      ? JSON.parse(localStorage.getItem('added_product'))
      : null;
  
    if (!addProductIds) {
      return false;
    }
  
    const updatedAddProductsIds = addProductIds?.filter((addProductId) => addProductId !== productId);
    localStorage.setItem('added_product', JSON.stringify(updatedAddProductsIds));
  
    return true;
  };