type TextInputProps = {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

export default function TextInput({
  name,
  placeholder,
  value,
  onChange,
  type = "text",
}: TextInputProps) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border p-2 w-full mb-3 rounded"
    />
  );
}
