import React from "react"
import { useState, useEffect, useParams } from "react"
import fireDb from "../firebase"
import { toast } from "react-toastify"

function AddNoteInput({
  title,
  setTitle,
  takeNote,
  setTakeNote,
  onSubmit,
  handleChange,
}) {
  return (
    <div className="home__noteInputs">
      <form action="" className="home__form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          id="title"
          className="home__form-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name="takeNote"
          id=""
          cols="0"
          rows="0"
          placeholder="Take a note..."
          className="home__form-textarea"
          value={takeNote}
          onChange={(e) => setTakeNote(e.target.value)}
        ></textarea>
        <button
          aria-label="button"
          type="submit"
          className="home__form-closeBtn"
        >
          Close
        </button>
      </form>
    </div>
  )
}

export default AddNoteInput
