import React from "react"
import "./Home.css"
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined"
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined"
import RestoreFromTrashOutlinedIcon from "@material-ui/icons/RestoreFromTrashOutlined"
import EditOutlinedIcon from "@mui/icons-material/EditOutlined"
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined"
import Masonry from "react-masonry-css"
import { NavLink } from "react-router-dom"

function Home() {
  return (
    <div className="home">
      <div className="container home__container">
        {/* SIDE MENU */}
        <div className="home__sideMenu">
          <ul className="sideMenu_list">
            <NavLink
              to="/"
              className="sideMenu_item"
              activeClassName="active-menu"
            >
              <div className="sideMenu__icon">
                <StickyNote2OutlinedIcon
                  className="sideMenu_mui"
                  style={{ fontSize: 33 }}
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
                  style={{ fontSize: 33 }}
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
        </div>
        {/* MAIN SECTION */}
        <div className="home__mainSection">
          <div className="home__noteInputs">
            <form action="" className="home__form">
              <input
                type="text"
                placeholder="Title"
                name="title"
                id="title"
                className="home__form-title"
              />
              <textarea
                name="takeNote"
                id=""
                cols="0"
                rows="0"
                placeholder="Take a note..."
                className="home__form-textarea"
              ></textarea>
              <button role="button" className="home__form-closeBtn">
                Close
              </button>
            </form>
          </div>
          <div className="home__notes">
            <div className="masonry_noteCards">
              <div className="noteCard card">
                <h3 className="noteCard__title">Title 1</h3>
                <p className="noteCard__description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestias cumque veniam sapiente alias labore voluptatibus
                  reprehenderit nesciunt pariatur magnam excepturi consectetur
                  dolor, incidunt quia modi architecto laboriosam, quasi
                  eveniet. Eligendi.
                </p>
                <div className="noteCard__icons">
                  <EditOutlinedIcon />
                  <DeleteOutlineOutlinedIcon />
                </div>
              </div>
              <div className="noteCard card">
                <h3 className="noteCard__title">Title 2</h3>
                <p className="noteCard__description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestias cumque veniam sapiente alias labore voluptatibus
                  reprehenderit nesciunt pariatur magnam excepturi consectetur
                  dolor, incidunt quia modi architecto laboriosam, quasi
                  eveniet. Eligendi.
                </p>
                <div className="noteCard__icons">
                  <EditOutlinedIcon />
                  <DeleteOutlineOutlinedIcon />
                </div>
              </div>
              <div className="noteCard card">
                <h3 className="noteCard__title">Title</h3>
                <p className="noteCard__description">
                  Lorem ipsum dolor sit amet consectetur,
                </p>
                <div className="noteCard__icons">
                  <EditOutlinedIcon />
                  <DeleteOutlineOutlinedIcon />
                </div>
              </div>
              <div className="noteCard card">
                <h3 className="noteCard__title">Title</h3>
                <p className="noteCard__description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestias cumque veniam sapiente alias labore voluptatibus
                  reprehenderit nesciunt pariatur magnam excepturi consectetur
                  dolor, incidunt quia modi architecto laboriosam, quasi
                  eveniet. Eligendi.
                </p>
                <div className="noteCard__icons">
                  <EditOutlinedIcon />
                  <DeleteOutlineOutlinedIcon />
                </div>
              </div>
              <div className="noteCard card">
                <h3 className="noteCard__title">Title</h3>
                <p className="noteCard__description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestias cumque veniam sapiente alias labore voluptatibus
                  reprehenderit nesciunt pariatur magnam excepturi consectetur
                  dolor, incidunt quia modi architecto laboriosam, quasi
                  eveniet. Eligendi.
                </p>
                <div className="noteCard__icons">
                  <EditOutlinedIcon />
                  <DeleteOutlineOutlinedIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
