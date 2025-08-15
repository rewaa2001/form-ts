import { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    checkbox: false
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-2 text-gray-800">Job Form</h1>
        <hr className="mb-4 border-gray-300" />

        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              value={formData.name}
              onChange={e =>
                setFormData({
                  ...formData,
                  name: e.target.value
                })
              }
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              value={formData.phone}
              onChange={e =>
                setFormData({
                  ...formData,
                  phone: e.target.value
                })
              }
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Age
            </label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              value={formData.age}
              onChange={e =>
                setFormData({
                  ...formData,
                  age: e.target.value
                })
              }
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-200"
              checked={formData.checkbox}
              onChange={e =>
                setFormData({
                  ...formData,
                  checkbox: e.target.checked
                })
              }
            />
            <label className="ml-2 text-sm text-gray-700">Are you employed?</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
