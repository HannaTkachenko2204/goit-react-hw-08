import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";

const validationSchema = Yup.object().shape({
  name: Yup.string().trim().required("Name is required"),
  email: Yup.string()
    .trim()
    .required("Email is required")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid email."
    ),
  password: Yup.string().trim().min(8).required("Password is required"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(register(values));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label>
          Username
          <Field
            type="text"
            name="name"
            placeholder="Enter your name"
            autoComplete="off"
          />
          <ErrorMessage name="name" component="span" />
        </label>
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
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
