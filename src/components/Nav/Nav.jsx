import React from "react";
import { Link } from "react-router-dom";
import * as PATHS from "../../utils/paths";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={PATHS.HOME_PAGE}>Home</Link>
        </li>
        <li>
          <Link to={PATHS.ABOUT_PAGE}>About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
