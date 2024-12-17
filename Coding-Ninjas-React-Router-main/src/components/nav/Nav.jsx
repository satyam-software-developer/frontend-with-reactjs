import React from "react";
import style from "./Nav.module.css";
import { Link, NavLink, Outlet } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <div className={style.nav_container}>
          <div className={style.nav_title_wrapper}>

            {/* Second Task  */}
            <Link to="/">
              <img
                className={style.logo}
                src="https://files.codingninjas.in/pl-ninja-16706.svg"
                alt="logo"
              />
            </Link>

            <h4>Coding Ninjas</h4>
          </div>
          <div className={style.nav_details}>

            {/* Second Task  */}
            <button>
              <NavLink to="/courses">
                {({ isActive }) => (isActive ? "On Courses" : "Go To Courses")}
              </NavLink>
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;

