import types from "./types";

const fetchSuccess = (data) => ({
    type:  types.FETCH_POPULAR_SUCCESS,
    payload: data
});

const fetchError = (error) => ({
    type: types.FETCH_POPULAR_FAILURE,
    payload: error
});

export const fetchPopular = () => (url) => (dispatch, getState) => {

    dispatch(types.FETCH_POPULAR_REQUEST);
    return fetch(url)
        .then((response)=> (response.json()))
        .then((data) => {
            dispatch(fetchSuccess(data.entries))
        })
        .catch((error) => {
            dispatch(fetchError(error))
        });
};

export default {
    fetchPopular
};
