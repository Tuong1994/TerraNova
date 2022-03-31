import React from "react";
import utils from "../utils";

const useCreateToast = () => {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  const [portalId] = React.useState<string>(`toast__portal--${utils.uuid()}`);

  React.useEffect(() => {
    const div = document.createElement("div");
    div.id = portalId;
    div.setAttribute("style", "position: fixed; top: 10%; right: 0; z-index: 9999");
    document.getElementsByTagName("body")[0].prepend(div);
    setLoaded(true);

    return () => {
      document.getElementsByTagName("body")[0].removeChild(div);
    };
  }, [portalId]);

  return { loaded, portalId };
};

export default useCreateToast;
