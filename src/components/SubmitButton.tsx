type SubmitButtonProps = {
  disabled: boolean;
  text: string;
};

export default function SubmitButton({ disabled, text }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`w-full p-2 rounded text-white ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-700"
      }`}
    >
      {text}
    </button>
  );
}
