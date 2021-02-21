import React from "react";
import { Link } from "gatsby";

import logoB from "../../assets/image/yetiswap-logo.png";

const Logo = ({ className = "", ...rest }) => {
  return (
    <Link to="/" className={`${className}`} {...rest}>
      <img src={logoB} alt="" width={200} className="light-version-logo" />
    </Link>
  );
};

export default Logo;
