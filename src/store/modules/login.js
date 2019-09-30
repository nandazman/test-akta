import axios from 'axios';

const actions = {
    async logInUser(_, data) {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/todos'
        );

        console.log({
            response,
            data
        })
    }
}

export default {
    actions
}