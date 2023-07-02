import clubApi from '../../api/clubApi'
import { FETCH_CLUBS, GET_CLUB } from '../types'


export const fetchClubs = () => async dispatch => {
    const config = {
        headers: {
            "ngrok-skip-browser-warning": "69420",
            "x-auth-token": localStorage.getItem('token')
        }
    }

    try {
        const response = await clubApi.get('/api/clubs/', config)
        dispatch({ type: FETCH_CLUBS, payload: response?.data })
    } catch (err) {
        // dispatch({ type: AUTH_ERROR })
        const errors = err?.response?.data?.errors
        console.log(errors);
    }
}

export const getClub = (id) => async dispatch => {
    const config = {
        headers: {
            "ngrok-skip-browser-warning": "69420",
            "x-auth-token": localStorage.getItem('token')
        }
    }

    try {
        const response = await clubApi.get(`/api/clubs/${id}`, config)
        dispatch({ type: GET_CLUB, payload: response?.data })
    } catch (err) {
        // dispatch({ type: AUTH_ERROR })
        const errors = err?.response?.data?.errors
        console.log(errors);
    }
}

