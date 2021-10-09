import React from "react"
import { useState, useEffect, useParams } from "react"
import EditOutlinedIcon from "@mui/icons-material/EditOutlined"
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined"
import Tooltip from "@mui/material/Tooltip"
import fireDb from "../firebase"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"

function Notes({ data, id }) {
  const handleDelete = (id) => {
    fireDb.child(`notes/${id}`).remove((err) => {
      if (err) {
        toast.error(err)
      } else {
        toast.success("Note Deleted Successfully")
      }
    })
  }

  const handleView = (params) => {}

  return (
    <div className="noteCard card" key={id}>
      <h3 className="noteCard__title">{data[id].title}</h3>
      <p className="noteCard__description">{data[id].takeNote}</p>
      <div className="noteCard__icons">
        <Link to={`/update/${id}`}>
          <Tooltip title="Edit">
            <button className="homeCard__btn">
              <EditOutlinedIcon className="homeCard__icon" />
            </button>
          </Tooltip>
        </Link>
        <Tooltip title="Delete">
          <button className="homeCard__btn" onClick={() => handleDelete(id)}>
            <DeleteOutlineOutlinedIcon className="homeCard__icon" />
          </button>
        </Tooltip>
        <Link>
          <Tooltip title="View Note">
            <button className="homeCard__btn" onClick={() => handleView(id)}>
              View
            </button>
          </Tooltip>
        </Link>
      </div>
    </div>
  )
}

export default Notes
