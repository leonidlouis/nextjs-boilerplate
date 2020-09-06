import { takeLatest, call, put } from "redux-saga/effects";
import SampleActions, { SampleTypes } from "../reducer/sample";
import constant from '../../constant'

export function* sampleListener(api) {
  yield takeLatest(
    SampleTypes.GET_SAMPLE_DATA_REQUEST,
    getSampleDataAction,
    api
  );
}


function* getSampleDataAction(api, action) {
  try {
    // you can also access action.payload here
    const res = yield call(api.sampleApiRequest);

    if (res.data) {
      yield put(SampleActions.getSampleDataSuccess(res.data));
    } else {
      const errMsg = typeof res.data === 'string' ? res.data : constant.API_ERROR.UNEXPECTED
      yield put(SampleActions.getSampleDataFailure(errMsg));
    }
  } catch (err) {
    const errMsg = typeof err.message === 'string' ? res.data : constant.API_ERROR.UNEXPECTED
    yield put(
      SampleActions.getSampleDataFailure(errMsg)
    );
  }
}
