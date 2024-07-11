import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .required("Field must be filled in")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid email."
    ),
  password: Yup.string().trim().min(6).required("Field must be filled in"),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(logIn(values));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label>
          Email
          <Field
            type="email"
            name="email"
            placeholder="Enter your email"
            autoComplete="off"
          />
          <ErrorMessage name="email" component="span" />
        </label>
        <label>
          Password
          <Field
            type="password"
            name="password"
            placeholder="Enter your password"
            autoComplete="off"
          />
          <ErrorMessage name="password" component="span" />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
