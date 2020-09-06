import React from "react";
import _ from "../services/lodash";

const DataCard = React.memo(({ data, error }) => {
  if (error) return error;

  if (_.isEmpty(data)) return "";

  return (
    <div>
      {data.map((val, key) => (
        <ul key={key}>
          <li>Title: {val.title}</li>
          <li>Completed: {val.completed ? "True" : "False"}</li>
        </ul>
      ))}
    </div>
  );
});

export default DataCard;
