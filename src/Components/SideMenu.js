import React from "react"
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined"
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined"
import RestoreFromTrashOutlinedIcon from "@material-ui/icons/RestoreFromTrashOutlined"
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined"
import EditOutlinedIcon from "@mui/icons-material/EditOutlined"
import { NavLink } from "react-router-dom"

function SideMenu() {
  return (
    <ul className="sideMenu_list">
      <NavLink
        to="/"
        className="sideMenu_item"
        activeClassName="active-menu"
        exact
      >
        <div className="sideMenu__icon">
          <StickyNote2OutlinedIcon
            className="sideMenu_mui"
            style={{ fontSize: 31 }}
          />
        </div>
        <div className="sideMenu_title">Notes</div>
      </NavLink>
      <NavLink to="#" className="sideMenu_item" exact>
        <div className="sideMenu_icon">
          <NotificationsOutlinedIcon
            className="sideMenu_mui"
            style={{ fontSize: 33 }}
          />
        </div>
        <div className="sideMenu_title">Reminders</div>
      </NavLink>
      <NavLink to="#" className="sideMenu_item" exact>
        <div className="sideMenu_icon">
          <EditOutlinedIcon className="sideMenu_mui" style={{ fontSize: 31 }} />
        </div>
        <div className="sideMenu_title">Edit Labels</div>
      </NavLink>
      <NavLink to="#" className="sideMenu_item" exact>
        <div className="sideMenu_icon">
          <ArchiveOutlinedIcon
            className="sideMenu_mui"
            style={{ fontSize: 31 }}
          />
        </div>
        <div className="sideMenu_title">Archive</div>
      </NavLink>

      <NavLink to="#" className="sideMenu_item" exact>
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
