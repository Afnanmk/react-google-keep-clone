import React from "react"
import "./Home.css"
import { useState, useEffect, useParams } from "react"
import SideMenu from "./SideMenu"
import AddNoteInput from "./AddNoteInput"
import Notes from "./Notes"
import fireDb from "../firebase"
import Masonry from "react-masonry-css"

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

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    970: 2,
    800: 1,
    500: 1,
  }

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
            <div className="home__notes">
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {Object.keys(data).map((id) => {
                  return <Notes data={data} id={id} />
                })}
              </Masonry>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
