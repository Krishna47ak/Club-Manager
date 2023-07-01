import clubApi from '../../api/clubApi'
import { AUTH_ERROR, FETCH_USER, LOGIN_SUCCESS } from '../types'


export const fetchUser = () => async dispatch => {
    const config = {
        headers: {
            "ngrok-skip-browser-warning": "69420",
            "x-auth-token": localStorage.getItem('token')
        }
    }

    try {
        const response = await clubApi.get('/api/auth/', config)
        console.log(response);
        dispatch({ type: FETCH_USER, payload: response?.data })
    } catch (err) {
        // dispatch({ type: AUTH_ERROR })
        const errors = err?.response?.data?.errors
        console.log(errors);
    }
}

export const login = (email, password, history) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password })
    try {
        const response = await clubApi.post('/api/auth/signin', body, config)
        localStorage.setItem('token', response.data)
        dispatch({ type: LOGIN_SUCCESS, payload: response?.data })
        history('/profile')
    } catch (err) {
        const errors = err.response.data.error
        console.log(errors);
    }
}

export const signup = (name, email, mobile, gender, role, usn, collegename, password, history) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ name, email, mobile, gender, role, usn, collegename, password })
    try {
        const response = await clubApi.post('/api/auth/signup', body, config)
        localStorage.setItem('token', response.data)
        dispatch({ type: LOGIN_SUCCESS, payload: response?.data })
        history('/profile')
    } catch (err) {
        const errors = err.response.data.errors
        console.log(err);
    }
}
