import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../actions';
import types from '../types';
import fetchMock from 'fetch-mock'
import expect from 'expect';

const stringMiddleware = () => (nextDispatch) => (action) => {
    if (typeof action === 'string') {
        return nextDispatch({ type: action });
    }
    return nextDispatch(action);
};

const middlewares = [thunk, stringMiddleware];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
    afterEach(() => (fetchMock.restore()));

    it('gets FETCH_POPULAR_SUCCESS when fetching has been done', () => {
        fetchMock.getOnce('*', {
            body: { entries: ['do something'] },
            headers: { 'content-type': 'application/json' }
        });

        const store = mockStore({
            entries: [],
            loading: null,
            error: null
        });

        const expectedActions = [
            { type: types.FETCH_POPULAR_REQUEST },
            { type: types.FETCH_POPULAR_SUCCESS, payload: ['do something'] }
        ];
        const action = actions.fetchPopular();
        return store.dispatch(action('/TEST')).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        });
    })
});