import { useReducer } from "react";
import React from "react";
import CarContext from './CarContext'
import CarReducer from "./CarReducer";

import { ADD_PRODUCT, DELETE_PRODUCT } from "../types";


function CarState(props){
    const initialValue = {
        products: [],
    }

    const [state,dispatch] = useReducer(CarReducer,initialValue);


    function add(objeto){
        dispatch({type:ADD_PRODUCT,payload:objeto})
    }

    function eliminar(index){
        dispatch({type:DELETE_PRODUCT,payload:index})
    }

    return (
        <CarContext.Provider value={{
            products: state.products,
            add,
            eliminar
        }}>
        {props.children}
        
        </CarContext.Provider>
    )


}

export default CarState;