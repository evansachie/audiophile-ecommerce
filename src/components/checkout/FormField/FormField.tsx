import { useField } from 'formik';

interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  className?: string;
}

export const FormField = ({
  label,
  name,
  className = '',
  ...props
}: FormFieldProps) => {
  const [field, meta] = useField(name);
  const hasError = meta.touched && meta.error;

  return (
    <div className={`mb-4 ${className}`}>
      <div className="flex justify-between mb-2">
        <label htmlFor={name} className="block text-sm font-bold">
          {label}
        </label>
        {hasError && (
          <span className="text-red-500 text-xs">{meta.error}</span>
        )}
      </div>

      <input
        id={name}
        {...field}
        {...props}
        className={`w-full px-4 py-3 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-audiophile-orange ${
          hasError
            ? 'border-red-500'
            : 'border-gray-300 focus:border-audiophile-orange'
        }`}
      />
    </div>
  );
};
