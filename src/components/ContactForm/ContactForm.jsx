import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const validationShema = Yup.object().shape({
  id: "",
  name: Yup.string()
    .min(3, "Name must be at least 3 symbols")
    .max(50, "Name should be no more than 50 symbols")
    .required("Field must be filled in"),
  number: Yup.string()
    .matches(
      /^[\d\-()]+$/,
      "Phone must be contain only numbers, dashes, and parentheses"
    )
    .required("Field must be filled in"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationShema}
    >
      <Form className={css.form_container}>
        <label>
          Name
          <Field type="text" name="name" id="name" autoComplete="name" />
          <ErrorMessage name="name" component="span" className={css.error} />
        </label>
        <label>
          Number
          <Field type="text" name="number" id="number" autoComplete="tel" />
          <ErrorMessage name="number" component="span" className={css.error} />
        </label>
        <button type="submit" className={css.formButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
