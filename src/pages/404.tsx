import * as React from "react"
import { navigate, Link } from "gatsby"
import { useLocation } from "@reach/router"
import gql from "graphql-tag"
import { useQuery, useMutation } from "@apollo/client"
import { useLollyurlQuery, LollyurlQueryHookResult } from "../generated/graphql"

import Lolly from "../components/svg"

const GET_LOLLY = gql`
  query lollyurl($url: String!) {
    getByUrl(url: $url) {
      first
      second
      third
      from
      message
      giftedto
      url
    }
  }
`

const IndexPage = () => {
  const loc = useLocation()
  const u = loc.pathname.slice(7)
  console.log(loc.pathname, "loc")
  console.log(u, "got it")
  const { data, loading, error }: LollyurlQueryHookResult = useLollyurlQuery({
    variables: {
      url: u,
    },
  })
  console.log(data)
  if (data && data.getByUrl)
    return (
      <>
        <div>
          <Lolly
            first={data.getByUrl.first}
            second={data.getByUrl.second}
            third={data.getByUrl.third}
          />
          {/* <p>{`${isBrowser() ? location.origin : ""}/lolly/${data.url}`}</p> */}
          <div>
            <p>Dear {data && data.getByUrl && data.getByUrl.giftedto}!!</p>
            <p>
              {data && data.getByUrl && data.getByUrl.from} made this virtual
              lollipop for you. You can{" "}
              <Link to="/createLolly"> make your own</Link> to send to a friend
              who deserve some sugary treat which won't rot their teeth...
            </p>
          </div>
        </div>
      </>
    )
  return (
    <div>
      404 pagae
      <button onClick={() => navigate("/Lolly")}> Lolly</button>
    </div>
  )
}

export default IndexPage
