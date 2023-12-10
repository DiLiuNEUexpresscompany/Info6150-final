import React, { useState } from 'react';
import '../css/registrationForm.css'
import '../css/main.css'
function PersonalInformationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    destination:'',
    streetAddress: '',
    city: '',
    region: '',
    postalCode: '',
    travelDate: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log(formData);
  };

  return (
    <div className="space-y-10 divide-y divide-gray-900/10 py-10 paddingx">
      <form onSubmit={handleSubmit} className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
        <div className="px-4 py-5 space-y-6 sm:p-6">
          <div>
            <label htmlFor="firstName" className="block text-lg font-medium text-gray-700 title">
            <span className="font-semibold">First Name</span>
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
            <label htmlFor="lastName" className="block text-lg font-medium text-gray-700 title">
              <span className="font-semibold">Last Name</span>
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
            <label htmlFor="email" className="block text-lg font-medium text-gray-700 title">
                            <span className="font-semibold">Email address</span>
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
            <label htmlFor="country" className="block text-lg font-medium text-gray-700 title">
                           <span className="font-semibold">Your Country/Region </span>
            </label>
            <div className="mt-1">
              <select
                id="country"
                name="country"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                onChange={handleInputChange}
              >
                <option value="" className='paragraph'>country/region</option>
                <option value="China">China</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Japan">Japan</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="destination" className="block text-lg font-medium text-gray-700 title">
                    <span className="font-semibold">Destination</span>
            </label>
            <div className="mt-1">
              <select
                id="destination"
                name="destination"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                onChange={handleInputChange}
              >
                <option value="" className='paragraph'>Select a destination</option>
                <option value="Hongkong">Hongkong</option>
                <option value="Tokyo">Tokyo</option>
                <option value="Iceland">Iceland</option>
                <option value="Italy">Italy</option>
              </select>
            </div>
          </div>
          <div>
            
            <label htmlFor="streetAddress" className="block text-lg font-medium text-gray-700 title">
                           <span className="font-semibold">Street address </span>
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
            <label htmlFor="city" className="block text-lg font-medium text-gray-700 title">
                          <span className="font-semibold"> City </span>
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
            <label htmlFor="region" className="block text-lg font-medium text-gray-700 title">
                            <span className="font-semibold">State/Province/Region</span>
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
            <label htmlFor="postalCode" className="block text-lg font-medium text-gray-700 title">
                           <span className="font-semibold">ZIP/Postal code </span>
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
            <label htmlFor="travelDate" className="block text-lg font-medium text-gray-700 title">
                          <span className="font-semibold">Travel date  </span>
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
            className="title inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white re_bg-blue  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>

        {submitted && (
          <div className="flex justify-center items-center h-full">
            <div className="bg-white shadow-lg rounded-xl p-5 mt-8 w-96">
              <h2 className="text-lg font-bold mb-4 text-center capitalTitle">Submitted Information</h2>
              <div className="space-y-2 title">
              <p className="text-gray-700">
                    <span className="font-semibold">First Name:</span> {formData.firstName}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Last Name:</span> {formData.lastName}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Email:</span> {formData.email}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Country:</span> {formData.country}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Destination:</span> {formData.destination}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Street Address:</span>{' '}
                    {formData.streetAddress}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">City:</span> {formData.city}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Region:</span> {formData.region}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Postal Code:</span> {formData.postalCode}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Travel Date:</span> {formData.travelDate}
                  </p>
              </div>
            </div>
          </div>
        )}

    </div>
  );
}

export default PersonalInformationForm;
