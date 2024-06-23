import axios from 'axios';

export async function fetchPersonInfo(personId) {
    const response = await axios.get(`/api/info/person/${personId}`);
    const data = await response.data;

    return data;
}

export async function fetchSingleInfo(infoId) {
    const response = await axios.get(`/api/info/${infoId}`);
    const data = await response.data;

    return data;
}

export async function updateInfo(infoId, info) {
    let updateResult;
    try {
        const response = await axios.put(`/api/info/${infoId}`, info)
        .then((res)=> updateResult = res.data);

        
    } catch {

    }
    return updateResult;
}