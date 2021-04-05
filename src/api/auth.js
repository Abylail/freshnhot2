import api from './api'

const url = 'api/'

const login = (username, password) => {
    return api.post(url+'login', {
        "username": username,
        "password": password
    }, {})
};

const logout = (token) => {
    return api.post(url + 'logout', {},{
        'headers': {
            'Authorization':`Bearer ${token}`,
        }
    })
};

const registration = (username, password, password_conf) => {
    return api.post(url+'register', {
        "username": username,
        "password": password,
        "password_confirmation": password_conf
    }, {})
};

export { 
    login,
    registration,
    logout
}