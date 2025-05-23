import FormikWrapper from '../components/form/FormikWrapper';
import {
  familyFields,
  familyInitialValues,
  familyValidationSchema,
} from '../components/form/formConfig';

const handleFamilySubmit = (values) => {
  console.log('Family Form Submitted:', values);
};

const FamilyForm = () => (
  <FormikWrapper
    initialValues={familyInitialValues}
    validationSchema={familyValidationSchema}
    onSubmit={handleFamilySubmit}
    fields={familyFields}
  />
);

export default FamilyForm;
