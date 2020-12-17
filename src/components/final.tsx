import * as React from "react"
import { navigate, Link } from "gatsby"

import Lolly from "./svg"

const IndexPage = ({ data }) => {
  console.log(data, "final")
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#ffb8de",
        }}
      >
        <div style={{ margin: "0 auto", textAlign: "center" }}>
          <Lolly first={data.first} second={data.second} third={data.third} />
        </div>

        <div
          className="final"
          style={{
            width: "200px",
            margin: "0 auto",
            fontFamily: "sans-serif",
            backgroundColor: "#F5F5F5",
            color: "black",
            padding: "1% 10vw",
          }}
        >
          <p>Dear {data && data.giftedto}</p>
          <p>{data && data.from} made this virtual lollipop for you.</p>
          <p>
            {" "}
            You can <Link to="/Lolly"> make your own</Link> to send to a friend
            that'll satisfy their sweet tooth
          </p>
        </div>
        <div style={{ padding: "50px 0" }}>
          <p
            style={{
              margin: "0 auto",
              textAlign: "center",
              fontFamily: "sans-serif",
              fontSize: "130%",
              fontWeight: "bold",
            }}
          >
            <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
              {" "}
              Send This URL{" "}
            </span>
            <a
              href={`https://virtal-lolly-zh.netlify.app/lolly/${data.url}`}
              target="_blank"
              style={{ color: "#FA73D9" }}
            >
              {" "}
              https://virtal-lolly-zh.netlify.app/lolly/{`${data.url}`}
            </a>{" "}
            To Your Friend
          </p>
        </div>
      </div>
    </>
  )
  return (
    <div>
      <button onClick={() => navigate("/Lolly")}> Lolly</button>
    </div>
  )
}

export default IndexPage
