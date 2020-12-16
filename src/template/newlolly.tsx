import React from "react"
// import { graphql, Link } from "gatsby"
// import Lolly from "../components/svg"

// export const query = graphql`
//   query MyQuery($url: String!) {
//     pageContext(url: $url) {
//       first
//       second
//       third
//       from
//       message
//       giftedto
//       url
//     }
//   }
// `

const isBrowser = () => typeof window !== "undefined"

const NewLolly = ({ pageContext }) => {
  console.log(pageContext, "template")
  return (
    <div>
      {/* <Lolly
        first={pageContext.first}
        second={pageContext.second}
        third={pageContext.third}
      />

      <p>{`${isBrowser() ? location.origin : ""}/lolly/${pageContext.url}`}</p>

      <div>
        <p>
          {pageContext.from} made this virtual lollipop for you. You can{" "}
          <Link to="/createLolly"> make your own</Link> to send to a friend who
          deserve some sugary treat which won't rot their teeth...
        </p>
      </div> */}
    </div>
  )
}

export default NewLolly
