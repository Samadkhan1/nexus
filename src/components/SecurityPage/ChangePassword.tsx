import { Lock } from "lucide-react";

const ChangePassword = () => {
  return (
    <div className="bg-white max-w-xl p-4">
      <h1 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <Lock /> Change Password
      </h1>
      <div>
        <label htmlFor="currentPassword">Current Password</label>
        <input type="password" id="currentPassword" className="border rounded-md p-2 w-full" />
        <label htmlFor="newpassword">New Password</label>
        <input type="password" id="newpassword" className="border rounded-md p-2 w-full" />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" className="border rounded-md p-2 w-full" />
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-700">
          Update Password
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
