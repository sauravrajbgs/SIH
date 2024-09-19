

function Dashboard() {
  return (
    <div className="isolate px-3 bg-white w-full">
    <div className="isolate px-3 bg-white w-full">
      <div className="max-w-2xl pl-8 mt-4">
        <h2 className="text-xl font-medium tracking-tight text-black sm:text-3/2xl">
          Personal Information
          <button className="ml-4 text-blue-600 text-sm hover:text-blue-800">
            Edit
          </button>
        </h2>
      </div>
      <form action="#" method="POST" className="mt-4 pl-8 max-w-xl">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-black"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* Gender Selection */}
          <div className="sm:col-span-2 mt-4 ">
            <h2 className="text-sm font-semibold leading-6 text-black mb-2">
              Select Your Gender
            </h2>
            <div className="flex flex-col gap-2">
              <label className="flex items-center">
                <input type="radio" name="gender" value="Male" className="mr-2" />
                Male
              </label>
              <label className="flex items-center">
                <input type="radio" name="gender" value="Female" className="mr-2" />
                Female
              </label>
            </div>
          </div>

          {/* Email */}
          <div className="sm:col-span-2 mt-6">
            <h2 className="text-xl font-medium text-black mb-4">
              Email
              <button className="ml-4 text-blue-600 text-sm hover:text-blue-800">
                Edit
              </button>
            </h2>
            <div className="mt-1">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="sm:col-span-2 mt-6">
  <h2 className="text-xl font-medium text-black mb-4">
    Phone Number
    <button className="ml-4 text-blue-600 text-sm hover:text-blue-800">
      Edit
    </button>
  </h2>

  {/* Separate fields for country code and phone number */}
  <div className="flex space-x-2 gap-1">
    
    {/* Country Code */}
    <div>
      <label htmlFor="country-code" className="block text-sm font-semibold leading-6 text-black">
        Country Code
      </label>
      <select
        id="country-code"
        name="country-code"
        className="mt-1 w-20 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
      >
        <option>+1</option>
        <option>IND +91</option>
        <option>+44</option>
        <option>+33</option>
      </select>
    </div>
    
    {/* Phone Number */}
    <div className="flex-grow">
      <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-black">
        Phone Number
      </label>
      <input
        type="tel"
        name="phone-number"
        id="phone-number"
        autoComplete="tel"
        className="mt-0.5 block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>

  </div>
</div>



        </div>
      </form>
    </div>
              {/* FAQs Section */}
            <form action="#" method="POST" className="mt-12 pl-11 ">

              <div className="sm:col-span-2 mt-6">
            <h2 className="text-xl font-medium text-black">FAQs</h2>
            <div className="space-y-4 mt-2">
              <div>
                <h3 className="font-medium text-md">
                  What happens when I update my email address (or mobile number)?
                </h3>
                <p className="text-gray-700 mt-0 text-sm">
                  Your login email id (or mobile number) changes, likewise. You'll receive
                  all your account-related communication on your updated email address (or
                  mobile number).
                </p>
              </div>

              <div>
                <h3 className="font-medium text-md">
                  When will my StamPick account be updated with the new email address (or
                  mobile number)?
                </h3>
                <p className="text-gray-700 mt-0 text-sm">
                  It happens as soon as you confirm the verification code sent to your
                  email (or mobile) and save the changes.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-md">
                What happens to my existing StamPick account when I update my email address (or mobile number)?
                </h3>
                <p className="text-gray-700 mt-0 text-sm">
                Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll
                continue seeing your Order history, saved information and personal details.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-md">
                Does my Seller account get affected when I update my email address?
                </h3>
                <p className="text-gray-700 mt-0 text-sm">
                StamPick has a 'single sign-on' policy. Any changes will reflect in your Seller account also.
                </p>
              </div>
            </div>

            <div className="mt-8 mb-6">
              <a href="#" className="text-blue-600 hover:underline mr-4 ">
                Deactivate Account
              </a>
              <br />
              <br />
              <a href="#" className="text-red-500 hover:underline mt-4">
                Delete Account
              </a>
            </div>
          </div>
            </form>
    </div>
  );
}

export default Dashboard;