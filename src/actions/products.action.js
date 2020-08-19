import axios from 'axios';
export const GET_PRODUCTS='GET_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';

const url = 'http://localhost:8080';
export function getProducts(){
    const getProductPromise = axios.get(`${url}/products`);
    return {
        type: GET_PRODUCTS,
        payload: getProductPromise
    };
}

export function addProduct(product, succeed, fail){
    const addProductPromise = axios.post(`${url}/products`,product)
        .then(res=>{
            console.log('res',res);
            res.data.success ? succeed('add correct') : fail('add failed');
            return {
                success: res.data.success,
                newProduct: product
            }
        })
        .catch(err=> {
            fail('add product failed');
            return {
                success: false
            };
        });
    return {
        type: ADD_PRODUCT,
        payload: addProductPromise
    }
}