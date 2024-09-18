

function Dashboard() {
  return (
    <div className=" px-3 bg-white w-full">
      <div className="mx-auto m-3">
        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
          Personal Information
        </h2>
      </div>
      <form action="#" method="POST" className="mx-auto mt-8 sm:mt-4">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-4">
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
                className="bg-none block w-full rounded-md border-0 px-3.5 py-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
          <h2 className="text-sm font-semibold leading-6 text-black block mt-1">
            Select Your Gender
          </h2>
          <div className="flex flex-wrap gap-2 mt-2">
            <label className="flex items-center">
              <input type="radio" name="gender" value="Male" className="mr-2" />
              Male
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Female"
                className="mr-2"
              />
              Female
            </label>
          </div>

          <div className="sm:col-span-2 mt-0">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
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

          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 bg-transparent py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                  <option>IND+91</option>
                </select>
              </div>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* FAQs Section */}
          <div className="sm:col-span-2">
            <div className=" mx-auto p-6 mt-0">
              <h2 className="text-2xl font-bold mt-0">FAQs</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-md">
                    What happens when I update my email address (or mobile
                    number)?
                  </h3>
                  <p className="text-gray-700 mt-0 text-sm">
                    Your login email id (or mobile number) changes, likewise.
                    You'll receive all your account-related communication on
                    your updated email address (or mobile number).
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-md">
                    When will my Flipkart account be updated with the new email
                    address (or mobile number)?
                  </h3>
                  <p className="text-gray-700 mt-0 text-sm">
                    It happens as soon as you confirm the verification code sent
                    to your email (or mobile) and save the changes.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <a href="#" className="text-blue-600 hover:underline mr-4">
                  Deactivate Account
                </a>
                <a href="#" className="text-red-500 hover:underline">
                  Delete Account
                </a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Dashboard;
