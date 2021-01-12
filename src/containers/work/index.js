import React, { Fragment } from "react";
import View from "./style";

// Utils
import { WORK_UTIL } from "./utils";

const Work = ({}) => (
  <View>
    <h2 className="work__header">Work</h2>
    <div>
      {WORK_UTIL.map(({ company, position, description, time }) => (
        <Fragment>
          <div>{company}</div>
          <div>{position}</div>
          <div>{description}</div>
          <div>{time}</div>
        </Fragment>
      ))}
    </div>
  </View>
);

export default Work;
