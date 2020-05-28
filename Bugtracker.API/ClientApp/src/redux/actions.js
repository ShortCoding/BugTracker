import axios from 'axios';

const API_URL = 'api/users';

export const userPostFetch = user => {
    return dispatch => {
        return axios.post(API_URL + 'register', user )
            .then(res => {
                    let data = res.data;
                    localStorage.setItem("token", data.token);
                    dispatch(loginUser(data.user));
            })
            .catch(err => {
                console.log(err);
            })
    }
}

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})

export const logoutUser = () => ({
    type: 'LOGOUT_USER'
})


export const userLoginFetch = user => {
    return dispatch => {
        return axios.post(API_URL + '/login', user)
            .then(res => {
                let data = res.data;
                localStorage.setItem("token", data.token);
                dispatch(loginUser(data.user));
            })
            .catch((err) => {
              console.log(err); 
            })
    }
}

