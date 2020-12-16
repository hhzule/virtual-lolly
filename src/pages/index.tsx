import * as React from "react"
import { navigate } from "gatsby"
import gql from "graphql-tag"

// markup
const IndexPage = () => {
  return (
    <div>
      <button onClick={() => navigate("/Lolly")}> Lolly</button>
    </div>
  )
}

export default IndexPage
