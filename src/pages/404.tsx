import * as React from "react"
import { navigate } from "gatsby"
import gql from "graphql-tag"

const IndexPage = () => {
  // const [first, setFirst] = React.useState<Figure>("#d52358")
  // const [second, setSecond] = React.useState<Figure>("#e95946")
  // const [third, setThird] = React.useState<Figure>("#deaa43")
  // const { data } = useQuery(GET_LOLLY)
  // const [addLolly] = useMutation(ADD_LOLLY)

  return (
    <div>
      {/* <div>
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
      <div>
        <div className="toppingChooserContainer">
          <h1>Choose your Toppings!</h1>
          <button onClick={() => setPepperoni(!pepperoni)}>
            <p className="pepperoniWords">Pepperoni</p>
          </button>
          <button onClick={() => setMushrooms(!mushrooms)}>
            <p className="mushroomsWords">Mushrooms</p>
          </button>
          <button onClick={() => setTomatoes(!tomatoes)}>
            <p className="tomatoesWords">Tomatoes</p>
          </button>
          <button onClick={() => setOlives(!olives)}></button>
          <p className="olivesWords">Olives</p>
        </div>
        <Pizza
          mushrooms={mushrooms}
          tomatoes={tomatoes}
          pepperoni={pepperoni}
          olives={olives}
        />
      </div> */}
      <button onClick={() => navigate("/Lolly")}> Lolly</button>
    </div>
  )
}

export default IndexPage
