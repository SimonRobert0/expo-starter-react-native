import { all, put, fork, takeEvery } from 'redux-saga/effects';
import axios from "axios";

export function* requestFunction() {

    yield takeEvery("REQUEST_PAGE_2", function*() {
        try {

            console.log("Request page 2")

            yield put({ type: "REQUEST_PAGE_2_SUCCESS" });
        } catch (error) {
            console.log("ERROR : " + error);
            yield put({ type: "REQUEST_PAGE_2_ERROR", error });
        }
    });
}


export default function* rootSaga() {
    yield all([
        fork(requestFunction)
    ]);
}