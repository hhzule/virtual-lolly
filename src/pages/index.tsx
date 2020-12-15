import React from "react"
import { useQuery, useMutation } from "@apollo/client"
import gql from "graphql-tag"
import im from "./images/bm.png"
import icon from "./images/icon.png"

import {
  DelBmMutationHookResult,
  AddBmMutationHookResult,
  Bookmark,
  AllbookmarksQueryHookResult,
} from "../generated/graphql"

// runtime query

const GET_BM = gql`
  query allbookmarks {
    bookmarks {
      title
      id
      url
    }
  }
`
const ADD_BM = gql`
  mutation addBM($title: String!, $url: String!) {
    addBM(title: $title, url: $url) {
      id
    }
  }
`
const DEL_BM = gql`
  mutation delBM($id: String!) {
    delBM(id: $id) {
      id
    }
  }
`

export default function Home() {
  let inputText, sec_inputText

  const [addBM]: AddBmMutationHookResult = useMutation(ADD_BM)
  const [delBM]: DelBmMutationHookResult = useMutation(DEL_BM)

  const add = () => {
    if (!inputText.value) {
      alert("Enter a URL to save")
    }
    if (!sec_inputText.value) {
      alert("Enter a title to save")
    }
    var reg = inputText.value
    var res = reg.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    )
    if (res !== null) {
      addBM({
        variables: {
          title: inputText.value,
          url: sec_inputText.value,
        },
        refetchQueries: [{ query: GET_BM }],
      })
    } else {
      alert("Enter a valid url")
    }

    // console.log("done")
    inputText.value = ""
    sec_inputText.value = ""
  }

  const del = id => {
    delBM({
      variables: {
        id: id,
      },
      refetchQueries: [{ query: GET_BM }],
    })
  }

  const { loading, error, data }: AllbookmarksQueryHookResult = useQuery(GET_BM)

  if (loading) return <h2>Loading..</h2>

  // if (error) {
  //   console.log(JSON.stringify(error))
  //   return <h2>Error</h2>
  // }
  console.log(data, "data")

  return (
    <div className="container">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={im} alt="main" style={{ width: "200px" }} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <h1 style={{ textAlign: "center" }}> Your Bookmarking App </h1>
        <br />
      </div>{" "}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          fontFamily: "sans-serif",
          width: "70%",
          margin: "0 auto",
        }}
      >
        <div style={{ width: "100vw", textAlign: "center" }}>
          <div
            style={{
              backgroundColor: "#666AAD",
              padding: "10px 0",
              width: "70%",
              margin: "0 auto",
              color: "white",
            }}
          >
            <h3> URL / Title</h3>
            <input
              style={{
                padding: "2px 20px",
                margin: "0 10px",
                backgroundColor: "#FCBA7F",
                border: "none",
                color: "white",
                lineHeight: "30px",
                width: "70%",
              }}
              type="text"
              ref={node => {
                inputText = node
              }}
            />
          </div>

          <br />
          <div
            style={{
              backgroundColor: "#A3A3CD",
              padding: "10px 0",
              width: "70%",
              margin: "0 auto",
              color: "white",
            }}
          >
            <h3> Note To Self</h3>
            <input
              style={{
                padding: "2px 20px",
                margin: "0 10px",
                backgroundColor: "#FCBA7F",
                border: "none",
                color: "white",
                lineHeight: "30px",
                width: "70%",
              }}
              type="text"
              ref={node => {
                sec_inputText = node
              }}
            />
          </div>

          <br />
          <button
            onClick={add}
            style={{
              border: "none",
              padding: "10px 10px",
              margin: "30px 10px",
            }}
          >
            <img
              src={icon}
              alt="icon"
              style={{ width: "30px", padding: "0px 20px" }}
            />
          </button>
        </div>{" "}
        <br /> <br />
        <div
          style={{
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            backgroundColor: "#f2f2f2",
          }}
        >
          {" "}
          <h3
            style={{
              textAlign: "center",
              fontFamily: "sans-serif",
              color: "#666AAD",
              fontWeight: "bolder",
              fontSize: "30px",
            }}
          >
            My Bookmarks
          </h3>
          <br />
          <br />
          {data &&
            data.bookmarks &&
            data.bookmarks.map((bm: Bookmark) => {
              console.log(bm)
              return (
                <div key={bm.id}>
                  <div
                    style={{
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      fontFamily: "sans-serif",
                      backgroundColor: "#A3A3CD",
                      width: "70%",
                      margin: "0 auto",
                    }}
                  >
                    <p> {bm.title} </p>
                    <br />
                    <p> {bm.url} </p>
                  </div>

                  <div>
                    <button
                      style={{
                        padding: "10px",
                        margin: "10px",
                        fontFamily: "sans-serif",
                        backgroundColor: "#FCBA7F",
                      }}
                      onClick={() => del(bm.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}
// [context.production]
//   environment = { FAUNADB= "fnAD89jK7LACByaqsdWFqQRlVxuWKSPZUez8mLnY"}
// fnAD9F4SliACACzOg9fwx9VlrFXg5kaEI82WtQ-V
