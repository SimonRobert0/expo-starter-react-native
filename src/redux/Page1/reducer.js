import actions from './actions';

const initState = {
    error: false,
    fetching: false
};

const page1Reducer = (
    state = initState,
    action
) => {
    switch (action.type) {
        case actions.REQUEST_PAGE_1:
            return { ...state, fetching: true };
        case actions.REQUEST_PAGE_1_SUCCESS:
            return { ...state, fetching: true };
        case actions.REQUEST_PAGE_1_ERROR:
            return { ...state, fetching: true, error: action.error };

        default:
            return state;
    }
}

export default page1Reducer;