import axios from 'axios'; 

class AuthService{
    
    API_USER = 'api/user';
    
    constructor() {
        
    }
    
    login(user){
        axios.post(this.API_USER + '/login', user)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    
    async register(user){
       try {
         return await  axios.post(this.API_USER + '/register', user);
       } catch (error) {
           console.log(error);
       }
    }
    
    logout(){
        
    }
}

export default new AuthService();