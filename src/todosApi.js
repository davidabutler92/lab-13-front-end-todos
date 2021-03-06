import request from 'superagent';


const URL = 'https://warm-bayou-77109.herokuapp.com'

export async function fetchTodos() {
    const TOKEN = localStorage.getItem('TOKEN');
    try {
        const response = await request
                .get(`${URL}/api/todos`)
                .set('Authorization', TOKEN)
                return response
            } catch(err) {
        throw err;
    }
}

export async function updateTodo(id) {
    const TOKEN = localStorage.getItem('TOKEN');
    try {
        return await request
                .put(`${URL}/api/todos/${id}`)
                .set('Authorization', TOKEN)
                .send({
                    completed: true
                })
    } catch(err) {
        throw err;
    }
}

export function createTodo(item) {
    const TOKEN = localStorage.getItem('TOKEN');
    try {
        return request
                .post(`${URL}/api/todos`, item)
                .set('Authorization', TOKEN)              
    } catch(err) {
        throw err;
    }
}

export async function createUser(state) {
    try {
        return await request.post(`${URL}/auth/signup`)
        .send(state)
    } catch(err) {
        throw err;
    }
}

export async function signIn(state) {
    try {
        return await request.post(`${URL}/auth/signin`)
        .send(state)
    } catch(err) {
        throw err;
    }
}



