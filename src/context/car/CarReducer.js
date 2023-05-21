import { ADD_PRODUCT, DELETE_PRODUCT,GET_PRODUCTS } from "../types";

export default (state, action) => {
    const { payload, type } = action;
  
    switch (type) {
      case GET_PRODUCTS:

        return {
          ...state,
          products: "tilin",
        };
        case DELETE_PRODUCT:
          const productos = [...state.products]
          productos.splice(payload,1);
          console.log(productos);
          return {
                ...state,
                products: [...productos],
            };
        case ADD_PRODUCT:
            return{
                ...state,
                products: [...state.products,payload],
            }
      default:
        return state;
    }
  };