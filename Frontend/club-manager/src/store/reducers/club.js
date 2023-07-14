import { FETCH_CLUBS, GET_CLUB, EDIT_CLUB } from "../types"

const initialState = {
    club: null,
    loading: true,
    clubs: []
}

export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case FETCH_CLUBS:
            return {
                ...state,
                loading: false,
                clubs: payload
            }
        case EDIT_CLUB:
        case GET_CLUB:
            return {
                ...state,
                loading: false,
                club: payload
            }
        default:
            return state
    }
}