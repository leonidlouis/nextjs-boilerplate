import { all, fork } from "redux-saga/effects";
import { sampleListener } from "./sample";
import api from "../../services/api";

export default function* rootSaga() {
  yield all([fork(sampleListener, api)]);
}
