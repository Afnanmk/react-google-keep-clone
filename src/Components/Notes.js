import React from "react"
import EditOutlinedIcon from "@mui/icons-material/EditOutlined"
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined"
import Tooltip from "@mui/material/Tooltip"
import fireDb from "../firebase"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"

function Notes({ note, popupOnClick, title, takeNote }) {
  const handleDelete = (id) => {
    const todoRef = fireDb.database().ref("Notes").child(id)
    todoRef.remove()
  }

  return (
    <div className="noteCard card">
      <div onClick={() => popupOnClick(note)}>
        <h3 className="noteCard__title">{note.title}</h3>
        <p className="noteCard__description">{note.takeNote}</p>
      </div>
      <div className="noteCard__icons">
        <Link to="/">
          <Tooltip title="Edit">
            <button className="homeCard__btn">
              <EditOutlinedIcon
                className="homeCard__icon"
                onClick={() => popupOnClick(note)}
              />
            </button>
          </Tooltip>
        </Link>
        <Tooltip title="Delete">
          <button
            className="homeCard__btn"
            onClick={() => handleDelete(note.id)}
          >
            <DeleteOutlineOutlinedIcon className="homeCard__icon" />
          </button>
        </Tooltip>
      </div>
    </div>
  )
}

export default Notes
