import React from "react";
import * as customHook from "../../hooks/index";

const Contact: React.FunctionComponent<{}> = (props) => {
  customHook.useLoading();
  return <div></div>;
};

export default Contact;
