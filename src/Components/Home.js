import React from "react"
import "./Home.css"
import { useState, useEffect, useParams } from "react"
import SideMenu from "./SideMenu"
import AddNoteInput from "./AddNoteInput"
import Notes from "./Notes"
import fireDb from "../firebase"
import Masonry from "react-masonry-css"
import { toast } from "react-toastify"
import Header from "./Header"
import Popup from "./Popup"

function Home() {
  const [noteList, setNoteList] = useState([])
  const [title, setTitle] = useState("")
  const [takeNote, setTakeNote] = useState("")
  const [popupTrigger, setPopupTrigger] = useState(false)

  useEffect(() => {
    const todoRef = fireDb.database().ref("Notes")
    todoRef.on("value", (snapshot) => {
      const notes = snapshot.val()
      const noteList = []
      for (let id in notes) {
        noteList.push({ id, ...notes[id] })
      }
      setNoteList(noteList)
      console.log(noteList)
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const todoRef = fireDb.database().ref("Notes")
    const notes = {
      title,
      takeNote,
    }
    todoRef.push(notes)

    setTitle("")
    setTakeNote("")
  }

  const popupOnClick = (params) => {
    setPopupTrigger(true)
  }

  const updateNote = (params) => {
    setPopupTrigger(false)
  }

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    970: 2,
    800: 1,
    500: 1,
  }

  return (
    <>
      <Popup
        trigger={popupTrigger}
        setPopupTrigger={setPopupTrigger}
        popupOnClick={popupOnClick}
        updateNote={updateNote}
      />
      <Header />
      <div className="home">
        <div className="home__container">
          {/* SIDE MENU */}
          <div className="home__sideMenu">
            <SideMenu />
          </div>
          {/* MAIN SECTION */}
          <div className="home__mainSection">
            <AddNoteInput
              title={title}
              setTitle={setTitle}
              takeNote={takeNote}
              setTakeNote={setTakeNote}
              onSubmit={handleSubmit}
            />
            <div className="home__notes">
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {noteList
                  ? noteList.map((note) => (
                      <Notes
                        note={note}
                        setPopupTrigger={setPopupTrigger}
                        popupOnClick={popupOnClick}
                      />
                    ))
                  : ""}
              </Masonry>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
