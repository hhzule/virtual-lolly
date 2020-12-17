import * as React from "react"
import { navigate } from "gatsby"
import gql from "graphql-tag"
import back from "../main-back.gif"

// markup
const IndexPage = () => {
  return (
    <div
      style={{ backgroundColor: "#FFB8DE", width: "100vw", height: "100vh" }}
    >
      <div className="min-h1">
        <h1>Project 12E</h1>
        <h2>Virtual lolly</h2>
      </div>
      <div style={{ width: "", textAlign: "center" }}>
        <img src={back} alt="" />
        <br />
        <button
          className="main-btn"
          style={{ alignSelf: "center" }}
          onClick={() => navigate("/Lolly")}
        >
          {" "}
          Start Making Your Lolly
        </button>
      </div>
    </div>
  )
}

export default IndexPage
