import FormikWrapper from '../components/form/FormikWrapper';
import {
  registrationFields,
  registrationInitialValues,
  registrationValidationSchema,
} from '../components/form/formConfig';

const handleSubmit = (values) => {
  console.log('Form Submitted:', values);
};

const RegistrationForm = () => (
  <FormikWrapper
    initialValues={registrationInitialValues}
    validationSchema={registrationValidationSchema}
    onSubmit={handleSubmit}
    fields={registrationFields}
  />
);

export default RegistrationForm;
