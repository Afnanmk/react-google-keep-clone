import React from "react"
import "./Popup.css"

function Popup({ updateNote, trigger }) {
  return trigger ? (
    <div className="popup" onClick={() => updateNote()}>
      <div className="popup-inner">
        <form action="" className="popup__form">
          <input
            type="text"
            placeholder=""
            name="title"
            id="title"
            className="popup__form-title"
          />
          <textarea
            name="takeNote"
            id=""
            cols="0"
            rows="0"
            placeholder=""
            className="popup__form-textarea"
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
