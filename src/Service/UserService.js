import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8080/api/test/article';

class UserService{
//here get the userservice class
    getUsers(){
        axios.get(USERS_REST_API_URL);
    }
}

//export object for class

export default new UserService();