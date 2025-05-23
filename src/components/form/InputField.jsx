import { Field, ErrorMessage } from 'formik';

const InputField = ({ name, label, type }) => {

  if (type === 'checkbox') {
    return (
      <div className="flex items-center gap-2">
        <Field id={name} name={name} type="checkbox" className="w-4 h-4" />
        <label htmlFor={name} className="text-sm">
          {label}
        </label>
        <ErrorMessage name={name} component="div" className="text-red-500 text-sm ml-2" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} type={type} className="border px-2 py-1 rounded" />
      <ErrorMessage name={name} component="div" className="text-red-500 text-sm" />
    </div>
  )
};

export default InputField;
