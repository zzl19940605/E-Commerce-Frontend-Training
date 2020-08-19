import axios from 'axios'
import qs from 'qs';
export const LOGIN ='LOGIN';
const url = 'http://localhost:8080';
export function login(user){
    const loginPromise= axios.post(`${url}/login`,
        qs.stringify((user),
            {withCredentials:true})
        )
        .then(res => {
            return {
                user: res.data.success && 'logged in',
                success: res.data.success
        };
        })
        .catch(err=>{
            return {
                success: false
            };
        });
    return {
        type: LOGIN,
        payload: loginPromise
    }

}