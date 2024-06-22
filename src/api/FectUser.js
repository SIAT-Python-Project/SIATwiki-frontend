import axios from 'axios';

export async function fetchUserLogin(checkEmail, checkPassword) {
    const response = await axios.post(`/api/login`, { email: checkEmail, password: checkPassword });
    const data = await response.data;
    return data;
}

export async function fetchUserSingup(checkName, checkEmail, checkPassword) {
    const response = await axios.post(`/api/sign-up`, { name: checkName, email: checkEmail, password: checkPassword });
    const data = await response.data;

    return data;
}

export async function fetchUserList() {
    const response = await axios.post(`/api/userFind`);
    const data = await response.data;

    return data;
}
export async function fetchLogout() {
    const response = await axios.post(`/api/logout`);
    const data = await response.data;
    return data;
}