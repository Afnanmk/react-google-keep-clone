import React from "react"
import { useState } from "react"
import fireDb from "../firebase"
import { toast } from "react-toastify"

function AddNoteInput() {
  const [input, setInput] = useState({
    title: "",
    takeNote: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setInput({ ...input, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (input.title || input.takeNote) {
      fireDb.child("notes").push(input, (err) => {
        if (err) {
          toast.error(err)
        } else {
          toast.success("Note Added Successfully")
        }
      })
    } else {
      toast.error("Please provide value in each input field")
    }

    setInput({
      title: "",
      takeNote: "",
    })
  }

  return (
    <div className="home__noteInputs">
      <form action="" className="home__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          id="title"
          className="home__form-title"
          value={input.title}
          onChange={handleChange}
        />
        <textarea
          name="takeNote"
          id=""
          cols="0"
          rows="0"
          placeholder="Take a note..."
          className="home__form-textarea"
          value={input.takeNote}
          onChange={handleChange}
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
