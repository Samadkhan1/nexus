import React from "react";
import ChangePassword from "../../components/SecurityPage/ChangePassword";
import TwoFactorAuthentication from "../../components/SecurityPage/TwoFactorAuthentication";
import SecurityQuestions from "../../components/SecurityPage/SecurityQuestions";
import RecentActivity from "../../components/SecurityPage/RecentActivity";
import SecurityTips from "../../components/SecurityPage/SecurityTips";

const PrivacyPage = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Security Settings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-md shadow">
          <ChangePassword />
        </div>
        <div>
            <TwoFactorAuthentication/>
        </div>
      </div>
      <div className="mt-4 flex ">
        <SecurityQuestions/>
        <RecentActivity/>
      </div>
      <div>
        <SecurityTips/>
      </div>
    </div>
  );
};

export default PrivacyPage;
