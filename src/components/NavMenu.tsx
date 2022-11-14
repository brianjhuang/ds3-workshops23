import { NavLink} from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import { Menu } from "semantic-ui-react";

function NavMenu() {
  return (
    <div className="float-child-left">
      <Menu vertical>
        <Menu.Item name="Home">
          <NavLink className="navbar-item" to="ds3-workshops23/">
            Home
          </NavLink>
        </Menu.Item>
        <Menu.Item name="Upcoming Calendar">
          <NavLink className="navbar-item" to="ds3-workshops23/calendar">
            Upcoming Calendar
          </NavLink>
        </Menu.Item>
        <Menu.Item name="Meet the Committee">
          <NavLink className="navbar-item" to="ds3-workshops23/members">
            Meet the Committee
          </NavLink>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default NavMenu;
