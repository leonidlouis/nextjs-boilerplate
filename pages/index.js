import { END } from "redux-saga";
import SampleActions from "../redux/reducer/sample";
import { useSelector } from "react-redux";
import _ from "../services/lodash";
import DataCard from "../components/data_card";

const Index = () => {
  const {
    success,
    error,
    data
  } = useSelector((state) => state.sample);

  return (
    <section className="container container--center container--flex container--width-80">
      <DataCard
        success={success}
        error={error}
        data={data}
      />
    </section>
  );
};

Index.getInitialProps = async ({ store, isServer }) => {
  if (_.isEmpty(store.getState().sample.data)) {
    store.dispatch(SampleActions.getSampleDataRequest());
    if (isServer) {
      store.dispatch(END);
      await store.sagaTask.toPromise();
    }
  }
};

export default Index;
