import { useState } from "react";

interface FormData {
  name: string;
  phone: string;
  age: string;
  position: string;
  checkbox: boolean;
}

const App = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    age: "",
    position: "",
    checkbox: false,
  });

  const [errors, setErrors] = useState({
    phone: "",
    age: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    let valid = true;
    const newErrors = { phone: "", age: "" };

    // Validate phone
    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
      valid = false;
    }

    // Validate age
    const ageNum = parseInt(formData.age);
    if (ageNum < 18 || ageNum > 100) {
      newErrors.age = "Age must be between 18 and 100.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");

    if (validateForm()) {
      setSuccessMessage("Form submitted successfully!");
    }
  };

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.age.trim() !== "" &&
    formData.position.trim() !== "" &&
    formData.checkbox;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-2 text-gray-800 text-center">
          Job Application Form
        </h1>
        <hr className="mb-6 border-gray-400" />

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>
            <input
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              className={`w-full border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200`}
              value={formData.phone}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phone: e.target.value,
                })
              }
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Age
            </label>
            <input
              type="number"
              className={`w-full border ${
                errors.age ? "border-red-500" : "border-gray-300"
              } rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200`}
              value={formData.age}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  age: e.target.value,
                })
              }
            />
            {errors.age && (
              <p className="text-red-500 text-sm mt-1">{errors.age}</p>
            )}
          </div>

          {/* Position */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Desired Position
            </label>
            <select
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              value={formData.position}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  position: e.target.value,
                })
              }
            >
              <option value="">Select a position</option>
              <option value="developer">Frontend Developer</option>
              <option value="designer">UI/UX Designer</option>
              <option value="manager">Project Manager</option>
            </select>
          </div>

          {/* Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-200"
              checked={formData.checkbox}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  checkbox: e.target.checked,
                })
              }
            />
            <label className="ml-3 text-sm text-gray-700">
              I confirm that all information provided is correct
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-2 px-4 rounded font-semibold text-white transition ${
              isFormValid
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Submit
          </button>

          {/* Success Message */}
          {successMessage && (
            <p className="text-green-600 text-center mt-4">{successMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default App;
