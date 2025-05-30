import Button from "@/components/Button";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
const ProfilePage = () => {
  return (
    <main className="bg-[#FDEDE5] py-10 overflow-hidden">
      <div className="px-10  md:mx-16">
        {/* user info */}
        <div className="max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-6 w-full border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Profile
            </h2>

            <div className="border border-dashed border-gray-300 rounded-md p-4 mb-4 flex items-start space-x-3">
              <FaUser className="text-orange-500 text-xl mt-1" />
              <div className="flex-1">
                <p className="font-medium text-gray-800">Name :</p>
                <input
                  type="text"
                  placeholder="Mark Jecno"
                  className="text-gray-600 bg-transparent outline-none border-none p-0 focus:ring-0 w-full"
                />
              </div>
            </div>

            <div className="border border-dashed border-gray-300 rounded-md p-4 mb-4 flex items-start space-x-3">
              <FaEnvelope className="text-orange-500 text-xl mt-1" />
              <div className="flex-1">
                <p className="font-medium text-gray-800">Email:</p>
                <input
                  type="email"
                  placeholder="mark-jecno@gmail.com"
                  className="text-gray-600 bg-transparent outline-none border-none p-0 focus:ring-0 w-full"
                />
              </div>
            </div>

            <div className="border border-dashed border-gray-300 rounded-md p-4 flex items-start space-x-3">
              <FaLock className="text-orange-500 text-xl mt-1" />
              <div className="flex-1">
                <p className="font-medium text-gray-800">Address</p>
                <input
                  type="text"
                  placeholder="93, Songbird Cir, Blackville, South Carolina, USA–29817"
                  className="text-gray-600 bg-transparent outline-none border-none p-0 focus:ring-0 w-full"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button text={"Update"} fill={true}></Button>
          </div>
        </div>
        {/* password inputs */}

        <div className="max-w-4xl mt-16">
          <div className="bg-white rounded-md shadow-md p-6 w-full border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Change Password
            </h2>

            <div className="border border-dashed border-gray-300 rounded-md p-4 mb-4 flex items-start space-x-3">
              <FaLock className="text-orange-500 text-xl mt-1" />
              <div className="flex-1">
                <p className="font-medium text-gray-800">Current Password:</p>
                <input
                  type="password"
                  placeholder="..................."
                  className="text-gray-600 bg-transparent outline-none border-none p-0 w-full focus:ring-0"
                />
              </div>
            </div>

            <div className="border border-dashed border-gray-300 rounded-md p-4 mb-4 flex items-start space-x-3">
              <FaLock className="text-orange-500 text-xl mt-1" />
              <div className="flex-1">
                <p className="font-medium text-gray-800">New Password:</p>
                <input
                  type="password"
                  placeholder="..................."
                  className="text-gray-600 bg-transparent outline-none border-none p-0 w-full focus:ring-0"
                />
              </div>
            </div>

            <div className="border border-dashed border-gray-300 rounded-md p-4 flex items-start space-x-3">
              <FaLock className="text-orange-500 text-xl mt-1" />
              <div className="flex-1">
                <p className="font-medium text-gray-800">Confirm Password:</p>
                <input
                  type="password"
                  placeholder="..................."
                  className="text-gray-600 bg-transparent outline-none border-none p-0 w-full focus:ring-0"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button text={"Save Changes"} fill={true}></Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
