import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as VscIcons from "react-icons/vsc";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple, Red } from "@mui/material/colors";
export const SidebarData = [
  {
    title: "Banglore",
    path: "/",
    icon: <Avatar sx={{ width: 24, height: 24 }}>B</Avatar>,
    cName: "nav-text",
  },
  {
    title: "Kolkata",
    path: "/",
    icon: (
      <Avatar sx={{ bgcolor: deepOrange[500], width: 24, height: 24 }}>
        K
      </Avatar>
    ),
    cName: "nav-text",
  },
  {
    title: "Mumbai",
    path: "/",
    icon: (
      <Avatar sx={{ bgcolor: deepPurple[500], width: 24, height: 24 }}>
        M
      </Avatar>
    ),
    cName: "nav-text",
  },
  {
    title: "Chennai",
    path: "/",
    icon: (
      <Avatar sx={{ bgcolor: deepPurple[500], width: 24, height: 24 }}>
        C
      </Avatar>
    ),
    cName: "nav-text",
  },
];
