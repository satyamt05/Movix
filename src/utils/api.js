import axios from "axios";//to access api globally

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN; //importing api key frm .env

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

//api will give 2 arguments url and params
export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
