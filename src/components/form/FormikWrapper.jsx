import { Formik, Form } from 'formik';
import InputField from './InputField';

const FormikWrapper = ({ initialValues, validationSchema, onSubmit, fields }) => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form className="space-y-4">
        {fields.map((field) => (
          <InputField key={field.name} {...field} />
        ))}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default FormikWrapper;
