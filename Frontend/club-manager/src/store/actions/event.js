import clubApi from '../../api/clubApi'
import { EVENT_ERROR, FETCH_EVENTS } from "../types"


export const fetchEvents = () => async dispatch => {
    const config = {
        headers: {
            "ngrok-skip-browser-warning": "69420",
            "x-auth-token": localStorage.getItem('token')
        }
    }

    try {
        const response = await clubApi.get('/api/events/', config)
        dispatch({ type: FETCH_EVENTS, payload: response?.data })
    } catch (err) {
        dispatch({ type: EVENT_ERROR })
        const errors = err?.response?.data?.errors
        console.log(errors);
    }
}