const BASE_URL = 'https://pixabay.com/api/'
const API_KEY = '17900814-302d5089a0a2dd859a9f7dfa1'

function fetchPhoto (searchQuery,page){
    return fetch(`${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(res => {
        if(res.ok){
            return res.json()
        }
        return Promise.reject(
            new Error(`Image not found`)
        )
    })
}

const api ={
    fetchPhoto
}

export default api