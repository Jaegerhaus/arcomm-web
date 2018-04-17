import React from "react";

import "./index.scss";

const ErrorPage = ({ error }) => (
  <div className="ErrorPage">

    <h1>Oops, something snapped :(</h1>
    <p>&hellip; we're looking into why {error && error.toString()}</p>
    <pre>{error && error.stack}</pre>

  </div>
);

export default ErrorPage;
