import api from './api'
import userStorage from "@/api/localstorage";

const url = "api/users/";

const getUsers = () => {
    return api.get(url + "all", {
        'headers': {
            'Authorization':`Bearer ${userStorage.get.token()}`,
        }
    });
};

const addUser = (username, password) => {
    return api.post("api/register", {username: username, password: password, password_confirmation: password})
}

export {
    getUsers,
    addUser
}