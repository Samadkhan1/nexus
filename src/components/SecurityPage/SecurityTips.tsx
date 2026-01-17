import { Check, Shield } from "lucide-react";

const SecurityTips = () => {
  const tips = [
    {
      Heading: "Use a strong, unique password",
      Description:
        "Create a password that is at least 8–12 characters long and includes uppercase letters, lowercase letters, numbers, and special symbols.",
    },
    {
      Heading: "Avoid personal information",
      Description:
        "Do not use easily guessable details like your name, email, phone number, date of birth, or username.",
    },
    {
      Heading: "Don’t reuse old passwords",
      Description:
        "Using the same password across multiple platforms increases risk. Always choose a new password you haven’t used before.",
    },
    {
      Heading: "Never share your password",
      Description:
        "Keep your password private. No employee or support staff will ever ask for your password.",
    },
    {
      Heading: "Update your password regularly",
      Description:
        "Changing your password periodically helps protect your account, especially if you suspect unusual activity.",
    },
    {
      Heading: "Enable Two-Factor Authentication (2FA)",
      Description:
        "Adding an extra verification step (OTP, authenticator app) greatly improves account security.",
    },
  ];
  return (
    <div className="w-full bg-white p-4 min-h-[30px] rounded-md shadow mt-5">
      <h3 className="text-lg font-medium mb-4 flex gap-2 items-center">
        <Shield /> Security Tips
      </h3>
      <div>
        {tips.map((tip, index) => (
          <div key={index} className="mb-4">
            <h4 className="font-semibold flex gap-2"><Check className="text-green-400"/> {tip.Heading}</h4>
            <p className="text-sm text-gray-600 ml-8">{tip.Description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecurityTips;
