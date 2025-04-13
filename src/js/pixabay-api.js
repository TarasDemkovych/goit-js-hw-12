import axios from 'axios';
export const pageLimit = 15;
const GET_URL = 'https://pixabay.com/api/';
const API_KEY = '49667075-d98922f201863107fc2d4193e';

export async function getImagesByQuery(search, page = 1) {
    return await axios.get(`${GET_URL}`, {
        params: {
            key: API_KEY,
            q: search,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: pageLimit, page,
        }
    })
};