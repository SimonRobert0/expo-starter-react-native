import actions from './actions';

const initState = {
    error: false,
    fetching: false
};

const page2Reducer = (
    state = initState,
    action
) => {
    switch (action.type) {
        case actions.REQUEST_PAGE_2:
            return { ...state, fetching: true };
        case actions.REQUEST_PAGE_2_SUCCESS:
            return { ...state, fetching: true };
        case actions.REQUEST_PAGE_2_ERROR:
            return { ...state, fetching: true, error: action.error };

        default:
            return state;
    }
}

export default page2Reducer;