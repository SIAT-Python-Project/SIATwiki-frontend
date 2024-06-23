import axios from 'axios';

export async function fetchCategoryNames() {
    const response = await axios.get(`/api/info/category`);
    const data = await response.data;
    return data;
}
