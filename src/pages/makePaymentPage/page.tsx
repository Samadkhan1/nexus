import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const recipients = ["John Doe", "Jane Smith", "Robert Johnson"];

export default function MakePaymentPage() {
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [description, setDescription] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");


  return (
    <div className="grid max-w-5xl  grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT: SEND PAYMENT */}
        <div className="lg:col-span-2  border bg-white rounded-xl p-6 shadow-sm ">
            <Link  className="mb-4 flex text-blue-500 hover:text-blue-600 px-0 py-0" to="/payments">
              <ArrowLeft className="mr-2" />
              Back to Payments
            </Link>
          <h2 className="text-xl font-semibold mb-6">Send Payment</h2>

          {/* Amount */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Amount ($)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Recipient */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Recipient</label>
            <select
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="w-full rounded-lg border px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a recipient</option>
              {recipients.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              rows={4}
              placeholder="Enter payment description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-lg border px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Payment Method */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Payment Method
            </label>
            <div className="flex gap-4">
              <button
                onClick={() => setPaymentMethod("card")}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg border w-full
                ${
                  paymentMethod === "card"
                    ? "border-blue-600 bg-blue-50 text-blue-600"
                    : "hover:border-gray-400"
                }`}
              >
                💳 Card
              </button>

              <button
                onClick={() => setPaymentMethod("bank")}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg border w-full
                ${
                  paymentMethod === "bank"
                    ? "border-blue-600 bg-blue-50 text-blue-600"
                    : "hover:border-gray-400"
                }`}
              >
                🏦 Bank Transfer
              </button>
            </div>
          </div>

          {/* Process Button */}
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Process Payment
          </button>
        </div>

        {/* RIGHT: QUICK ACTIONS */}
        <div className="space-y-6 ">
          {/* Deposit Funds */}
          <div className="bg-white w-full rounded-xl p-6 shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">Deposit Funds</h3>
            <div className="flex flex-col w-full">
              <input
                type="number"
                placeholder="Amount"
                className="flex-1 rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 mt-3 p-2 text-white px-5 rounded-lg font-semibold hover:bg-blue-700 transition">
                Add $500
              </button>
            </div>
          </div>

          {/* Recent Recipients */}
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">Recent Recipients</h3>

            <div className="space-y-4">
              {recipients.map((name) => (
                <div key={name} className="flex items-center justify-between">
                  <span className="font-medium">{name}</span>
                  <button className="px-4 py-1.5 border rounded-lg hover:bg-gray-100 transition">
                    Send
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
}
