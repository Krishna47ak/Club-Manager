import { EVENT_ERROR, FETCH_EVENTS } from "../types"

const initialState = {
    loading: true,
    events: []
}

export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case FETCH_EVENTS:
            return {
                ...state,
                loading: false,
                events: payload
            }
        case EVENT_ERROR:
            return {
                ...state,
                loading: false,
                events: []
            }
        default:
            return state
    }
}