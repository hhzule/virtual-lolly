import * as React from "react"
import Lolly from "../components/svg"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Figure } from "./types"
import { useQuery, useMutation } from "@apollo/client"
import gql from "graphql-tag"
// styles
// const pageStyles = {
//   color: "#232129",
//   padding: "96px",
//   fontFamily: "-apple-system, Roboto, sans-serif, serif",
// };

const GET_LOLLY = gql`
  query lolly {
    getLolly {
      id
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
      id
    }
  }
`
// markup
const IndexPage = () => {
  const [first, setFirst] = React.useState<Figure>("#d52358")
  const [second, setSecond] = React.useState<Figure>("#e95946")
  const [third, setThird] = React.useState<Figure>("#deaa43")
  const { data } = useQuery(GET_LOLLY)
  const [addLolly] = useMutation(ADD_LOLLY)
  console.log(data, "data")

  return (
    <div>
      <div>
        <Lolly first={first} second={second} third={third} />
        <div>
          <input
            type="color"
            value={first}
            onChange={e => setFirst(e.target.value)}
          />
          <input
            type="color"
            value={second}
            onChange={e => setSecond(e.target.value)}
          />
          <input
            type="color"
            value={third}
            onChange={e => setThird(e.target.value)}
          />
        </div>
      </div>

      <div>
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
          onSubmit={(values, actions) => {
            addLolly({
              variables: {
                first,
                second,
                third,
                from: values.from,
                message: values.message,
                giftedto: values.giftedto,
              },
            })
            // actions.setSubmitting(false)
            console.log("fn ran")
          }}
        >
          {() => (
            <Form>
              <label htmlFor="from">Name: </label>
              <Field name="from" />
              <ErrorMessage name="from" />
              <label htmlFor="message">Message: </label>
              <Field name="message" component="textarea" />
              <ErrorMessage name="message" />
              <label htmlFor="giftedto">Gifted To: </label>
              <Field name="giftedto" />
              <ErrorMessage name="giftedto" />

              <button type="submit">Send</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default IndexPage
