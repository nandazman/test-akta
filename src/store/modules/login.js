import axios from 'axios';
import router from '../../router'
const actions = {
    async logInUser(_, data) {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/todos'
        );

        alert('Log in Succesfull');
        router.push('/home');
    },
}

export default {
    actions
}