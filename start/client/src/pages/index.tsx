import React, { Fragment } from "react";
import { Router } from "@reach/router";

import Launches from "./launches";

export default function Pages() {
  return (
    <Fragment>
      <Router primary={false} component={Fragment}>
        <Launches path="/" />
      </Router>
    </Fragment>
  );
}
