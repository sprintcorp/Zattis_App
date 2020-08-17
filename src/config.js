import { BASE_URL, AUTH_TOKEN, FIRSTNAME, LASTNAME, IMAGE, ROLE } from "./env";

export const saveToken = (token) => {
    window.localStorage.setItem(AUTH_TOKEN, token);
};

export const saveUser = (user) => {
    let user_role = "";
    if (user.role === 'admin') {
        user_role = 'alpha'
    }
    if (user.role === 'agent') {
        user_role = 'beta'
    }
    if (user.role === 'user') {
        user_role = 'delta'
    }
    window.localStorage.setItem(FIRSTNAME, user.firstname);
    window.localStorage.setItem(LASTNAME, user.lastname);
    window.localStorage.setItem(IMAGE, user.image);
    window.localStorage.setItem(ROLE, user_role);
};



export const saveUserData = (data) => {
    // alert(id);
    saveToken(data.token);
    saveUser(data);

};

export const isValidToken = (token = this.getToken) => {
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

export const getFirstname = () => {
    // if (hasToken(getToken())) {
    return window.localStorage.getItem(FIRSTNAME);
    // }
};

export const getRole = () => {
    return window.localStorage.getItem(ROLE);
};

export const getLastname = () => {
    // if (hasToken(getToken())) {
    return window.localStorage.getItem(LASTNAME);
    // }
};

export const getImage = () => {
    // if (hasToken(getToken())) {
    return window.localStorage.getItem(IMAGE);
    // }
};

export const removeToken = () => {
    return window.localStorage.removeItem(AUTH_TOKEN);
};

export const removeUser = () => {
    window.localStorage.removeItem(FIRSTNAME);
    window.localStorage.removeItem(LASTNAME);
    window.localStorage.removeItem(IMAGE);
    window.localStorage.removeItem(ROLE);
};

export const logout = () => {
    removeToken();
    removeUser();
    // removeUserId();
};

// export const removeUser = () => {
//     return window.localStorage.removeItem(AUTH_USER);
// };

// export const userId = (token) => {
//     return splitToken(token).sub;
// };