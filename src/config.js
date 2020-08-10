import { BASE_URL, AUTH_TOKEN } from "./env";

export const saveToken = (token) => {
    window.localStorage.setItem(AUTH_TOKEN, token);
};

// export const saveUser = (user) => {
//     window.localStorage.setItem(AUTH_USER, user);
// };

// export const saveUserId = (id) => {
//     window.localStorage.setItem(AUTH_USER_ID, id);
// };

export const saveUserData = (data) => {
    // alert(id);
    saveToken(data.token);
    // saveUser(user);
    // saveUserId(id);
    // window.console.log('user_id',userId(token));
};

export const isValidToken = (token) => {
    return splitToken(token).iss === BASE_URL + 'api/v1/auth/login';
};

export const hasToken = (token) => {
    return isValidToken(token);
};

export const splitToken = (token) => {
    return JSON.parse(atob(token.split('.')[1]));
};

export const getToken = () => {
    return window.localStorage.getItem(AUTH_TOKEN);
};

// export const getUser = () => {
//     if (hasToken(getToken()))
//         return window.localStorage.getItem(AUTH_USER);
// };

export const removeToken = () => {
    return window.localStorage.removeItem(AUTH_TOKEN);
};

// export const removeUserId = () => {
//     return window.localStorage.removeItem(AUTH_USER_ID);
// };

export const logout = () => {
    removeToken();
    // removeUser();
    // removeUserId();
};

// export const removeUser = () => {
//     return window.localStorage.removeItem(AUTH_USER);
// };

// export const userId = (token) => {
//     return splitToken(token).sub;
// };