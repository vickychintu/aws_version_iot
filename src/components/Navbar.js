import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import Dashboard from "./Dashboard";
import "./Navbar.css";
function Navbar() {
  const [sidebar, setsidebar] = useState(false);
  const showSidebar = () => setsidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                {sidebar ? (
                  <AiIcons.AiOutlineClose onClick={showSidebar} />
                ) : (
                  <FaIcons.FaBars onClick={showSidebar} />
                )}
                {/* <AiIcons.AiOutlineClose onClick={showSidebar} /> */}
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    {sidebar ? <span>{item.title}</span> : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className={sidebar ? "shrink" : "no-shrink"}>
          <Dashboard />
        </div>
      </IconContext.Provider>
    </>
  );
}
export default Navbar;
