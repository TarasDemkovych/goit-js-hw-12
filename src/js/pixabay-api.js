import axios from 'axios';

export async function getImagesByQuery(search) {
    return axios.get(`https://pixabay.com/api/`, {
        params: {
            key: '49667075-d98922f201863107fc2d4193e',
            q: search,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: 21,
        }
    })
};