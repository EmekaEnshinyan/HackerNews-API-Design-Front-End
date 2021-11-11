import axios from 'axios';

const Articles_API_REST_URL = "http://localhost:3000";

class APIService {
    
    getArticles(){
        return axios.get(Articles_API_REST_URL);
    }

}

export default new APIService();