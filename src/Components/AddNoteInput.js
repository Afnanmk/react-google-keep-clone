import React from "react"
import { toast } from "react-toastify"

function AddNoteInput({
  title,
  setTitle,
  takeNote,
  setTakeNote,
  onSubmit,
  expand,
  setExpand,
}) {
  const handleExpand = () => {
    setExpand(true)
  }

  return (
    <div className="home__noteInputs">
      <form action="" className="home__form" onSubmit={onSubmit}>
        {expand ? (
          <input
            type="text"
            placeholder="Title"
            name="title"
            id="title"
            className="home__form-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : null}

        <textarea
          name="takeNote"
          id=""
          cols="0"
          rows="0"
          placeholder="Take a note..."
          className="home__form-textarea"
          value={takeNote}
          onChange={(e) => setTakeNote(e.target.value)}
          onClick={handleExpand}
        ></textarea>
        {expand ? (
          <button
            aria-label="button"
            type="submit"
            className="home__form-closeBtn"
          >
            Close
          </button>
        ) : (
          ""
        )}
      </form>
    </div>
  )
}

export default AddNoteInput
