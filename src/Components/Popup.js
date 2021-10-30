import React from "react"
import "./Popup.css"

function Popup({
  updateNote,
  trigger,
  editedTitle,
  editedTakeNote,
  setEditedTitle,
  setEditedTakeNote,
  theme,
}) {
  return trigger ? (
    <div className="popup">
      <div className={theme ? "popup-inner theme-dark" : "popup-inner"}>
        <form action="" className="popup__form">
          <input
            type="text"
            placeholder=""
            name="title"
            id="title"
            className={
              theme ? "popup__form-title theme-dark" : "popup__form-title"
            }
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            name="takeNote"
            id=""
            cols="0"
            rows="0"
            placeholder=""
            className={
              theme ? "popup__form-textarea theme-dark" : "popup__form-textarea"
            }
            value={editedTakeNote}
            onChange={(e) => setEditedTakeNote(e.target.value)}
          ></textarea>
          <button
            aria-label="button"
            type="submit"
            className="popup__form-closeBtn"
            onClick={() => updateNote()}
          >
            Close
          </button>
        </form>
      </div>
    </div>
  ) : (
    ""
  )
}

export default Popup
