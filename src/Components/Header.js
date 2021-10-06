import React from "react"
import logo from "../logo-3.png"
import "./Header.css"
import ReplayIcon from "@material-ui/icons/Replay"
import ViewStreamOutlinedIcon from "@material-ui/icons/ViewStreamOutlined"
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined"
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined"
import Tooltip from "@mui/material/Tooltip"

function Header() {
  return (
    <div className="header">
      <div className="container header__container">
        <div className="header__left">
          <a href="#">
            <img src={logo} alt="logo" className="logo-img" width="40px" />
          </a>
          <a href="#" className="header__title-link">
            <p className="header__title">Keep Notes</p>
          </a>
        </div>
        <div className="header__center">
          <Tooltip title="Search">
            <button className="search__button">
              <SearchOutlinedIcon className="search__icon" />
            </button>
          </Tooltip>
          <input
            type="search"
            className="header__searchInput"
            placeholder="Search"
          />
        </div>
        <div className="header__right">
          <Tooltip title="Refresh">
            <button className="icon__button">
              <ReplayIcon className="header__icon" style={{ fontSize: 29 }} />
            </button>
          </Tooltip>
          <Tooltip title="List View">
            <button className="icon__button">
              <ViewStreamOutlinedIcon
                className="header__icon"
                style={{ fontSize: 29 }}
              />
            </button>
          </Tooltip>
          <Tooltip title="Settings">
            <button className="icon__button">
              <SettingsOutlinedIcon
                className="header__icon"
                style={{ fontSize: 29 }}
              />
            </button>
          </Tooltip>
        </div>
      </div>
      <div className="border"></div>
    </div>
  )
}

export default Header
