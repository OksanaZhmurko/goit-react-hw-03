import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

export const ContactForm = ({ addContact }) => {
  const initalValue = { name: '', number: '' };
  const validated = Yup.object({
    name: Yup.string().required('Name is required').min(3).max(50),
    number: Yup.string().required('Number is required').min(3).max(20),
  });

  const handleSubmit = (values, { resetForm }) => {
    addContact(values.name, values.number);
    resetForm();
  };
  return (
    <Formik
      initialValues={initalValue}
      validate={values => {
        try {
          validated.validateSync(values, { abortEarly: false });
        } catch (errors) {
          return errors.inner.reduce((allErrors, currentError) => {
            return {
              ...allErrors,
              [currentError.path]: currentError.message,
            };
          }, {});
        }
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="name">Name:</label>
        <Field type="text" id="name" name="name" />
        <ErrorMessage name="name" component="div" />
        <label htmlFor="number">number:</label>
        <Field type="text" id="number" name="number" />
        <ErrorMessage name="number" component="div" />

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};
