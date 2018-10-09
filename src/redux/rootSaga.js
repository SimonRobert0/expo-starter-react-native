//Saga effects
import { all } from 'redux-saga/effects';

import page1Sagas from "./Page1/saga";
import page2Sagas from "./Page2/saga";

export default function* rootSaga() {
    yield all([
        page1Sagas(),
        page2Sagas()
    ]);
}