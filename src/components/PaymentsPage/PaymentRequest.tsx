import React, { useState } from "react";
import { Button } from "../ui/Button";
import { Copy } from "lucide-react";

const PaymentRequest = () => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [inputError, setInputError] = useState("");

  function handleRequest() {
    if (!amount || !description) {
      setInputError("Please fill in all fields");
      setTimeout(() => {
        setInputError("");
      }, 3000);
      return;
    }
    // setInputError("");
    setLink(
      "https://nexus.com/payment?amount=" +
        amount +
        "&description=" +
        description
    );
  }

  return (
    <div className="mt-5">
      <h1 className="text-xl font-semibold">Payment Request</h1>
      <p className="text-gray-500">Send a payment request to another user.</p>
      <div className="mt-5 p-6 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
        <img
          className="mx-auto w-20"
          src="https://cdn-icons-png.flaticon.com/128/7500/7500362.png"
          alt="Payments"
        />
        <label className="text-gray-600">Request Amount</label>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          placeholder="Enter amount"
          className="my-2 w-full p-2 border border-gray-300 rounded-md"
        />
        <label className="text-gray-600 ">Description</label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Enter description"
          className="mt-2 w-full p-2 border border-gray-300 rounded-md"
        />
        <Button className=" w-full mt-5" onClick={handleRequest}>
          Generate Link
        </Button>
        <div className="bg-gray-100 px-4 mt-5 min-h-16 flex items-center justify-between">
          <h1>
            {link ? (
              link
            ) : (
              <p className="text-gray-500">Link not generated yet</p>
            )}
          </h1>
          <button
            className="ml-4 hover:bg-white hover:scale-105 p-1"
            onClick={() => {
              navigator.clipboard.writeText(link);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
          >
            <Copy />
          </button>
        </div>
        <p className={inputError ? "text-center text-red-500 h-5 mt-2" : "text-center text-green-300 h-5 mt-2"}>
          {copied ? "Link Copied Succesfully!" : inputError ? inputError : ""}
        </p>
      </div>
    </div>
  );
};

export default PaymentRequest;
