import _ from "./lodash";

const toCamel = (data) => _.mapKeys(data, (v, k) => _.camelCase(k));

export default {
  toCamel,
};
