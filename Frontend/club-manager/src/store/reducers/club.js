import { FETCH_CLUBS } from "../types"

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
        default:
            return state
    }
}