import { Link } from "react-router-dom";

export default function CurrentClean() {
  return (
    <>
      <h1 className="ml-9 mt-4 text-neutral-700 font-semibold text-xl border-b border-slate-400">
        Current Cleans
      </h1>
      <h2 className="ml-9 mt-4 text-neutral-700 font-semibold text-mg pt-4">
        Priority Cleaning for Today Oct 3
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
        {/* <!-- First Column --> */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="/src/assets/interior.jpg"
            alt="Interior Image"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800">
              Deadline: Oct 10, 2024
            </h3>
            <h4 className="text-lg font-medium text-gray-600 mt-2">
              Checkout Time: 11:00 AM
            </h4>
            <p className="text-gray-500 mt-4">
              123 Main Street, Philadelphia, PA
            </p>
          </div>
        </div>

        {/* <!-- Second Column --> */}
        <Link to={"/cleaning-details-page"}>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/src/assets/interior.jpg"
              alt="Interior Image"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">
                Deadline: Oct 12, 2024
              </h3>
              <h4 className="text-lg font-medium text-gray-600 mt-2">
                Checkout Time: 10:00 AM
              </h4>
              <p className="text-gray-500 mt-4">456 Oak Lane, New York, NY</p>
            </div>
          </div>
        </Link>

        {/* <!-- Third Column --> */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="/src/assets/interior.jpg"
            alt="Interior Image"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800">
              Deadline: Oct 15, 2024
            </h3>
            <h4 className="text-lg font-medium text-gray-600 mt-2">
              Checkout Time: 12:00 PM
            </h4>
            <p className="text-gray-500 mt-4">789 Maple Ave, Los Angeles, CA</p>
          </div>
        </div>
      </div>
    </>
  );
}
