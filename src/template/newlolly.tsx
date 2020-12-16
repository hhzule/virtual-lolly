import React from "react"
import { Link } from "gatsby"
import Lolly from "../components/svg"

const isBrowser = () => typeof window !== "undefined"

const NewLolly = ({ pageContext }) => {
  console.log(pageContext, "template")
  return (
    <div>
      <Lolly
        first={pageContext.first}
        second={pageContext.second}
        third={pageContext.third}
      />

      <p>{`${isBrowser() ? location.origin : ""}/lolly/${pageContext.url}`}</p>

      <div>
        <p>Dear {pageContext.giftedto}!!</p>
        <p>
          {pageContext.from} made this virtual lollipop for you. You can{" "}
          <Link to="/createLolly"> make your own</Link> to send to a friend who
          deserve some sugary treat which won't rot their teeth...
        </p>
      </div>
    </div>
  )
}

export default NewLolly
