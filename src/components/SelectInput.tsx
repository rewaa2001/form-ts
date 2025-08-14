type SelectInputProps = {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
};

export default function SelectInput({
  name,
  value,
  onChange,
  options,
}: SelectInputProps) {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="border p-2 w-full mb-4 rounded"
    >
      <option value="">Select Salary Range</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
