import React from "react"
import "./Home.css"
import { useState, useEffect, useParams } from "react"
import SideMenu from "./SideMenu"
import AddNoteInput from "./AddNoteInput"
import Notes from "./Notes"
import fireDb from "../firebase"

function Home() {
  const [data, setData] = useState({})

  useEffect(() => {
    fireDb.child("notes").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() })
      } else {
        setData({})
      }
    })
    return () => {
      setData({})
    }
  }, [])

  return (
    <>
      <div className="home">
        <div className="container home__container">
          {/* SIDE MENU */}
          <div className="home__sideMenu">
            <SideMenu />
          </div>
          {/* MAIN SECTION */}
          <div className="home__mainSection">
            <AddNoteInput />

            <Notes data={data} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
