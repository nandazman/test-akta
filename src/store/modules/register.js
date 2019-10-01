import axios from 'axios';
import router from '../../router'
const actions = {
    async registerUser(_, data) {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/todos'
        );
        console.log(data)
        alert('Register Succesfull');
        router.push('/dashboard/login');
    },
}

export default {
    actions
}