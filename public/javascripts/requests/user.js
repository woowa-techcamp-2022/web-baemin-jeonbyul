import request from './request.js';

export const BASE_URL = '/users';

export const signIn = async (user)  => {
    const option = {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    }
    return request(`${BASE_URL}/signin`,option)
}

export const signUp = async (user)  => {
    const option = {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    }
    return request(`${BASE_URL}/signup`,option)
}
