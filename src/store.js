import createStore from 'unistore';
import axios from 'axios';

const initialState = {
    email:'',
    password:'',
    username:'',
    avatar:'',
    is_login : false
}


export const store = createStore(initialState)

export const actions = store => ({
    setField:(state,e) => {
        return {[e.target.name] : e.target.value};
    },

    postLogout: state =>{
        return {is_login : false};
    },
    
    postLogin : async state => {
        
        const data = {username: state.username, password: state.password, avatar:state.avatar};
        await axios
        .post("https://api-todofancy.herokuapp.com/api/auth")
        .then(response => {
            console.log("postLogin response", response.data);
                store.setState({
                    is_login : true,
                    username : response.data.user_data.username,
                    email : response.data.user_data.email,
                    avatar : response.data.user_data.avatar
                });
        })
        
        .catch(error => {
            console.log(error);
        })
    }
});