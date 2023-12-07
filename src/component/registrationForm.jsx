import React, { useState } from 'react';
import '../css/registrationForm.css'
function PersonalInformationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    streetAddress: '',
    city: '',
    region: '',
    postalCode: '',
    travelDate: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // 处理表单提交逻辑
  };

  return (
    <div className="space-y-10 divide-y divide-gray-900/10 py-10 paddingx">
      <form onSubmit={handleSubmit} className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
        <div className="px-4 py-5 space-y-6 sm:p-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div className="mt-1">
              <input
                type="email"
                name="email"
                id="email"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Country/Region
            </label>
            <div className="mt-1">
              <select
                id="country"
                name="country"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                onChange={handleInputChange}
              >
                <option value="">Select a country/region</option>
                <option value="canada">Canada</option>
                <option value="japan">Japan</option>
                <option value="united-states">United States</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700">
              Street address
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="streetAddress"
                id="streetAddress"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              City
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="city"
                id="city"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="region" className="block text-sm font-medium text-gray-700">
              State/Province/Region
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="region"
                id="region"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
              ZIP/Postal code
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="postalCode"
                id="postalCode"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="travelDate" className="block text-sm font-medium text-gray-700">
              Travel date
            </label>
            <div className="mt-1">
              <input
                type="date"
                name="travelDate"
                id="travelDate"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default PersonalInformationForm;
