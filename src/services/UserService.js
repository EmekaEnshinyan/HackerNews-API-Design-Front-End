import axios from 'axios'

const USERS_REST_API_URL = '';

class UserService{
//here get the userservice class
    getUser(){
        return axios.get(USERS_REST_API_URL);
    }
}

//export object for class

export default new UserService();