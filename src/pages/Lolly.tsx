import * as React from "react"
import Lolly from "../components/svg"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Figure } from "../../types"
import { Link } from "gatsby"
import { Router } from "@reach/router"
import { useQuery, useMutation } from "@apollo/client"
import gql from "graphql-tag"
import iam from "../back.png"

// const GET_LOLLY = gql`
//   query lolly {
//     getLolly {
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

const ADD_LOLLY = gql`
  mutation addLolly(
    $first: String!
    $second: String!
    $third: String!
    $from: String!
    $message: String!
    $giftedto: String!
  ) {
    addLolly(
      first: $first
      second: $second
      third: $third
      from: $from
      message: $message
      giftedto: $giftedto
    ) {
      url
    }
  }
`
// markup
const IndexPage = () => {
  const [first, setFirst] = React.useState<Figure>("#d52358")
  const [second, setSecond] = React.useState<Figure>("#e95946")
  const [third, setThird] = React.useState<Figure>("#deaa43")
  //   const { data } = useQuery(GET_LOLLY)
  const [addLolly] = useMutation(ADD_LOLLY)
  const [nl, setNl] = React.useState()
  //   console.log(data, "data")

  return (
    <div
      style={{
        backgroundColor: "#FFB8DE", // backgroundImage: `linear-gradient(to bottom ,${first}, ${second}, ${third})`,
      }}
    >
      {nl ? (
        <>
          <div>
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
                  href={`https://virtal-lolly-zh.netlify.app/lolly/${nl}`}
                  target="_blank"
                  style={{ color: "#FA73D9" }}
                >
                  {" "}
                  https://virtal-lolly-zh.netlify.app/lolly/{`${nl}`}
                </a>{" "}
                To Your Friend
              </p>
            </div>
            <div
              style={{
                width: "200px",
                margin: "0 auto",
                fontWeight: "bold",
                fontFamily: "sans-serif",
                fontSize: "150%",
                backgroundColor: "#F5F5F5",
                color: "black",
                padding: "1% 10vw",
              }}
              className="hellocard"
            >
              <p style={{ textAlign: "start" }}>hello</p>

              <p style={{ textAlign: "center" }}>to</p>

              <p style={{ textAlign: "end" }}>world</p>
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div
            style={{
              width: "100vw",
              textAlign: "center",
              fontFamily: "sans-serif",
            }}
          >
            <h1>Project 12E</h1>
          </div>
          <div
            style={{
              display: "flex",
              //   backgroundImage: `linear-gradient(to bottom ,${first}, ${second}, ${third})`,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginLeft: "025%",
              }}
            >
              <Lolly first={first} second={second} third={third} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  margin: "0 auto",
                  alignSelf: "center",
                  padding: "-30px 10px",
                  marginTop: "-35%",
                }}
              >
                <input
                  type="color"
                  value={first}
                  onChange={e => setFirst(e.target.value)}
                  style={{ margin: "20px" }}
                />
                <input
                  type="color"
                  value={second}
                  onChange={e => setSecond(e.target.value)}
                  style={{ margin: "20px" }}
                />
                <input
                  type="color"
                  value={third}
                  onChange={e => setThird(e.target.value)}
                  style={{ margin: "20px" }}
                />
              </div>
            </div>

            <div style={{ margin: "40px", fontFamily: "sans-serif" }}>
              <Formik
                initialValues={{
                  from: "",
                  message: "",
                  giftedto: "",
                }}
                validationSchema={Yup.object({
                  from: Yup.string().required("Required"),
                  message: Yup.string().required("Required"),
                  giftedto: Yup.string().required("Required"),
                })}
                onSubmit={async (values, actions) => {
                  const nlolly = await addLolly({
                    variables: {
                      first,
                      second,
                      third,
                      from: values.from,
                      message: values.message,
                      giftedto: values.giftedto,
                    },
                  })
                  const newL = nlolly && nlolly.data && nlolly.data.addLolly.url
                  setNl(newL)
                  console.log(nl)

                  // actions.setSubmitting(false)
                  console.log("fn ran")
                }}
              >
                {() => (
                  <Form>
                    <label htmlFor="from" style={{ margin: "20px 0" }}>
                      Name:{" "}
                    </label>
                    <br />
                    <Field
                      name="from"
                      style={{ margin: "20px 0", padding: "10px 50px" }}
                    />
                    <ErrorMessage name="from" />
                    <br />

                    <label htmlFor="message">Message: </label>
                    <br />

                    <Field
                      name="message"
                      component="textarea"
                      style={{ margin: "20px 0", padding: "50px" }}
                    />
                    <ErrorMessage name="message" />
                    <br />

                    <label htmlFor="giftedto">Gifted To: </label>
                    <br />

                    <Field
                      name="giftedto"
                      style={{ margin: "20px 0", padding: "10px 50px" }}
                    />
                    <ErrorMessage name="giftedto" />

                    <button
                      style={{ padding: "10px 20px", margin: "0 10px" }}
                      type="submit"
                    >
                      Send
                    </button>
                  </Form>
                )}
              </Formik>{" "}
            </div>
            <br />

            {/* {nl ? <p>send this url <Link></Link>to gift your friend the lolly</p>} */}
          </div>{" "}
        </>
      )}
    </div>
  )
}

export default IndexPage
