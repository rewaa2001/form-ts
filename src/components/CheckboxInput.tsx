type CheckboxInputProps = {
  name: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CheckboxInput({
  name,
  label,
  checked,
  onChange,
}: CheckboxInputProps) {
  return (
    <label className="flex items-center mb-3">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="mr-2"
      />
      {label}
    </label>
  );
}
