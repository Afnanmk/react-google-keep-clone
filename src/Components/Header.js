import React from "react"
import logo from "../logo-3.png"
import "./Header.css"
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined"
import ViewAgendaOutlinedIcon from "@mui/icons-material/ViewAgendaOutlined"
import GridViewIcon from "@mui/icons-material/GridView"
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import Tooltip from "@mui/material/Tooltip"
import { Link } from "react-router-dom"

function Header({
  searchTerm,
  setSearchTerm,
  theme,
  setTheme,
  listView,
  setListView,
}) {
  return (
    <div className={theme ? "header theme-dark" : "header"}>
      <div className="container header__container">
        <div className="header__left">
          <Link to="/">
            <img src={logo} alt="logo" className="logo-img" width="40px" />
          </Link>
          <Link to="/" className="header__title-link">
            <p className="header__title">Keep Notes</p>
          </Link>
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
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="header__right">
          <button className="search__button--mobile">
            <SearchOutlinedIcon
              className="search__icon"
              style={{ fontSize: 29 }}
            />
          </button>
          <Tooltip title="Refresh">
            <button
              className="icon__button"
              onClick={() => window.location.reload(false)}
            >
              <RefreshOutlinedIcon
                className="header__icon"
                style={{ fontSize: 29 }}
              />
            </button>
          </Tooltip>
          <Tooltip title={listView ? "Grid View" : "List View"}>
            <button
              className="icon__button"
              onClick={() => setListView(!listView)}
            >
              {listView ? (
                <GridViewIcon
                  className="header__icon"
                  style={{ fontSize: 29 }}
                />
              ) : (
                <ViewAgendaOutlinedIcon
                  className="header__icon"
                  style={{ fontSize: 29 }}
                />
              )}
            </button>
          </Tooltip>
          <Tooltip title={theme ? "Light Mode" : "Dark Mode"}>
            <button className="icon__button" onClick={() => setTheme(!theme)}>
              {theme ? (
                <LightModeOutlinedIcon
                  className="header__icon"
                  style={{ fontSize: 29 }}
                />
              ) : (
                <DarkModeOutlinedIcon
                  className="header__icon"
                  style={{ fontSize: 29 }}
                />
              )}
            </button>
          </Tooltip>
        </div>
      </div>
      <div className="border"></div>
    </div>
  )
}

export default Header
