import axios from 'axios';

//GET
export async function fetchPersonProfile(personId) {
    const response = await axios.get(`/api/person/${personId}`);
    const data = await response.data;

    return data;
}

//PUT
export async function updatePersonProfile(personId, updatedContent) {
    try {
        const response = await axios.put(`/api/person/${personId}`, updatedContent);
        console.log(response.data);
    } catch (e) {
        console.log(e);
    }
}

//POST
export async function createPersonProfile(personId, createdContent) {
    try {
        const response = await axios.post(`/api/person/${personId}`, createdContent);
        console.log(response.data);
    } catch (e) {
        console.log(e);
    }
}

//DELETE
export async function deletePersonProfile(personId) {
    try {
        const response = await axios.delete(`/api/person/${personId}`);
        console.log(response.data);
    } catch (e) {
        console.log(e);
    }
}