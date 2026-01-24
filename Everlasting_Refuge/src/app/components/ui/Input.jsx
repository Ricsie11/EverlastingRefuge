const Input = ({ label, ...props }) => (
  <div className="flex flex-col gap-1">
    {label && (
      <label className="text-sm text-gray-600 dark:text-gray-300">
        {label}
      </label>
    )}
    <input
      className="rounded-lg border px-3 py-2 bg-white dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500"
      {...props}
    />
  </div>
);

export default Input;