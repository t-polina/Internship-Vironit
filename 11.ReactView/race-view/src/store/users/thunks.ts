import * as actions from './actions';
import axios from 'axios';


export const getUserByToken = (token: string) => async (dispatch: any) => {
    dispatch(actions.getUserRequest())
    console.log('getUserByToken')
    try {
        console.log(token)
        const header = { 'Authorization': token }
        const { data } = await axios.get(`http://localhost:8000/user/`, { headers: header })
        console.log(data)
        dispatch(actions.getUserSuccess(data))
    } catch (e) {
        dispatch(actions.getUserFailure(e))
    }
}
export const addNewUser = async (user: any) => {
    const { data } = await axios.post(`http://localhost:8000/user`, user)
   
    if (data!== '') {
        localStorage.setItem('token', data);
        return true;
    }
    else return false;

}
export const setToken = async (login: string, password: string) => {
    const data = await axios.post(`http://localhost:8000/user/${login}&${password}`)
    if (data.data !== '') {
        localStorage.setItem('token', data.data);
        return true;
    }
    else return false;
}
