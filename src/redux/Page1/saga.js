import { all, put, fork, takeEvery } from 'redux-saga/effects';
import axios from "axios";

export function* requestFunction() {

    yield takeEvery("REQUEST_PAGE_1", function*() {
        try {

            console.log("Request page 1")

            yield put({ type: "REQUEST_PAGE_1_SUCCESS" });
        } catch (error) {
            console.log("ERROR : " + error);
            yield put({ type: "REQUEST_PAGE_1_ERROR", error });
        }
    });
}


export default function* rootSaga() {
    yield all([
        fork(requestFunction)
    ]);
}