import React from "react";
import Google from "../../OAuth/Google";

function LoginRequired(props) {
  return <Google {...props} />;
}

export default LoginRequired;
