import React from 'react'
import FormikWrapper from '../form/FormikWrapper';
import { familyFields, familyInitialValues, familyValidationSchema } from '../form/formConfig';

const FamilyRegister = () => {

  const handleFamilySubmit = (values, { resetForm }) => {
    console.log('Family form submitted:', values);
    resetForm();
  };

  return (
    <>
      <div>FamilyRegister</div>
      <FormikWrapper
        initialValues={familyInitialValues}
        validationSchema={familyValidationSchema}
        onSubmit={handleFamilySubmit}
        fields={familyFields}
      />
    </>
  )
}

export default React.memo(FamilyRegister)