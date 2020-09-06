import { createActions, createReducer } from "reduxsauce";

const { Types, Creators } = createActions({
  getSampleDataRequest: ["payload"],
  getSampleDataSuccess: ["payload"],
  getSampleDataFailure: ["payload"],
});

export const SampleTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  fetching: false,
  error: false,
  success: false,
  data: {},
};

const getSampleDataRequest = (state) => ({
  ...state,
  fetching: true,
  error: false,
  success: false,
  data: {},
});

const getSampleDataFailure = (state, { payload }) => ({
  ...state,
  fetching: false,
  error: payload,
  success: false,
  data: {},
});

const getSampleDataSuccess = (state, { payload }) => ({
  ...state,
  fetching: false,
  error: false,
  success: true,
  data: payload,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_SAMPLE_DATA_SUCCESS]: getSampleDataSuccess,
  [Types.GET_SAMPLE_DATA_REQUEST]: getSampleDataRequest,
  [Types.GET_SAMPLE_DATA_FAILURE]: getSampleDataFailure,
});
