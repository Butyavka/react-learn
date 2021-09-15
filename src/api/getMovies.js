import axios from "axios";

export const getMovies = async (limit = 10, page = 1) => {
    return await axios.get('https://yts.mx/api/v2/list_movies.json?sort__by=rating', {
        params: {
            limit,
            page
        }
    })
}