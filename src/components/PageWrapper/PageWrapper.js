import React, { useEffect, useContext } from "react";

import GlobalContext, { themeConfigDefault } from "../../context/GlobalContext";

const PageWrapper = ({ children, themeConfig = null }) => {
  const gContext = useContext(GlobalContext);

  useEffect(() => {
    gContext.changeTheme({ ...themeConfigDefault, ...themeConfig });
  }, []);

  return <>{children}</>;
};

export default PageWrapper;
