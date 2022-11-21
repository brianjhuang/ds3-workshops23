import { slide as Menu } from "react-burger-menu";
import { NavLink} from "react-router-dom";
import "../Sidebar.css";
import {
  BiHome,
  BiCalendarEvent,
  BiUser
} from "react-icons/bi";

type SidemenuProps = {
  pageWrapId: string;
  outerContainerId: string;
};

export const Sidebar = ({ pageWrapId, outerContainerId }: SidemenuProps) => {
  return (
    <Menu>
      <p className="memu-title">Menu</p>
      <a className="menu-item">
        <NavLink className="navbar-item" to="ds3-workshops23/">
            <BiHome />
            Home
        </NavLink>
      </a>
      <a className="menu-item">
        <NavLink className="navbar-item" to="ds3-workshops23/calendar">
            <BiCalendarEvent />
            Calendar
        </NavLink>
      </a>
      <a className="menu-item">
        <NavLink className="navbar-item" to="ds3-workshops23/members">
            <BiUser />
            Meet the Committee
        </NavLink>
      </a>
    </Menu>
  );
};
