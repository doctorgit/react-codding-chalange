import types from "./types";

const popularsReducer = (state, action) => {

    console.log('!!!!!!!popularsReducer', state, action);
    if (state === undefined) {
        return {
            entries: [],
            loading: null,
            error: null
        }
    }

    switch (action.type) {
        case types.FETCH_POPULAR_REQUEST :
            return {
                ...state,
                loading: action.payload,
                error: null
            };

        case types.FETCH_POPULAR_SUCCESS :
            return {
                entries: action.payload,
                loading: false,
                error: null
            };

        case types.FETCH_POPULAR_FAILURE :
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default popularsReducer;
