import React from "react"
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined"
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined"
import RestoreFromTrashOutlinedIcon from "@material-ui/icons/RestoreFromTrashOutlined"
import { NavLink } from "react-router-dom"

function SideMenu() {
  return (
    <ul className="sideMenu_list">
      <NavLink to="/" className="sideMenu_item" activeClassName="active-menu">
        <div className="sideMenu__icon">
          <StickyNote2OutlinedIcon
            className="sideMenu_mui"
            style={{ fontSize: 31 }}
          />
        </div>
        <div className="sideMenu_title">Notes</div>
      </NavLink>
      <NavLink
        to="/archive"
        className="sideMenu_item"
        activeClassName="active-menu"
      >
        <div className="sideMenu_icon">
          <ArchiveOutlinedIcon
            className="sideMenu_mui"
            style={{ fontSize: 31 }}
          />
        </div>
        <div className="sideMenu_title">Archive</div>
      </NavLink>
      <NavLink
        to="/trash"
        className="sideMenu_item"
        activeClassName="active-menu"
      >
        <div className="sideMenu_icon">
          <RestoreFromTrashOutlinedIcon
            className="sideMenu_mui"
            style={{ fontSize: 33 }}
          />
        </div>
        <div className="sideMenu_title">Trash</div>
      </NavLink>
    </ul>
  )
}

export default SideMenu
