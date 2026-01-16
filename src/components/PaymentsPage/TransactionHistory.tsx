import React from "react";
import { Button } from "../ui/Button";
import { Download } from "lucide-react";

const transationData = [
  {
    date: "15/06/2023",
    type: " Transfer",
    sender: "John Doe",
    receiver: "Acme Corp",
    status: "Completed",
    description: "Payment for services rendered",
    amount: "$1,500.00",
  },
  {
    date: "15/06/2023",
    type: " Deposit",
    sender: "John Doe",
    receiver: "Acme Corp",
    status: "Error",
    description: "Payment for services rendered",
    amount: "$1,500.00",
  },
  {
    date: "15/06/2023",
    type: " Paymnent",
    sender: "John Doe",
    receiver: "Acme Corp",
    status: "Completed",
    description: "Payment for services rendered",
    amount: "$1,500.00",
  },
  {
    date: "15/06/2023",
    type: "Received",
    sender: "John Doe",
    receiver: "Acme Corp",
    status: "Completed",
    description: "Payment for services rendered",
    amount: "$1,500.00",
  },
  {
    date: "15/06/2023",
    type: " Credit",
    sender: "John Doe",
    receiver: "Acme Corp",
    status: "Completed",
    description: "Payment for services rendered",
    amount: "$1,500.00",
  },
  {
    date: "15/06/2023",
    type: " Credit",
    sender: "John Doe",
    receiver: "Acme Corp",
    status: "Completed",
    description: "Payment for services rendered",
    amount: "$1,500.00",
  },
  {
    date: "15/06/2023",
    type: " Credit",
    sender: "John Doe",
    receiver: "Acme Corp",
    status: "Completed",
    description: "Payment for services rendered",
    amount: "$1,500.00",
  },
  {
    date: "15/06/2023",
    type: " Credit",
    sender: "John Doe",
    receiver: "Acme Corp",
    status: "Completed",
    description: "Payment for services rendered",
    amount: "$1,500.00",
  },
  {
    date: "15/06/2023",
    type: " Credit",
    sender: "John Doe",
    receiver: "Acme Corp",
    status: "Completed",
    description: "Payment for services rendered",
    amount: "$1,500.00",
  },
];

const TransactionHistory = () => {
  return (
    <div className="mt-5">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold">Transaction History</h1>
          <p className="text-gray-500">Recent transations and payments</p>
        </div>
        <Button >
          <Download className="mr-2" /> Export Transaction
        </Button>
      </div>
      <div className="max-h-96 mt-5 overflow-y-auto">
        <table className="w-full  overflow-scroll mt-4 table-auto border-collapse border border-gray-200">
          <thead className="sticky top-0 bg-blue-500 text-white">
            <tr className="bg-blue-500 text-white">
              <th className="px-4 py-2 text-start">Type</th>
              <th className="px-4 py-2 text-start">Description</th>
              <th className="px-4 py-2 text-start">Sender</th>
              <th className="px-4 py-2 text-start">Receiver</th>
              <th className="px-4 py-2 text-start">Amount</th>
              <th className="px-4 py-2 text-center">Status</th>
              <th className="px-4 py-2 text-start">Date</th>
            </tr>
          </thead>
          <tbody>
            {transationData.map((transaction, index) => (
              <tr className="hover:bg-blue-50">
                <React.Fragment key={index}>
                  <td className="border border-gray-200 px-4 py-2">
                    {transaction.type}
                  </td>
                  <td className="border border-gray-200 w-1/4 px-4 py-2">
                    {transaction.description}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {transaction.sender}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {transaction.receiver}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {transaction.amount}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    <div
                      className={
                        transaction.status === "Completed"
                          ? "border text-sm text-center rounded-full bg-green-200 border-gray-200 px-2 py-1 text-green-800 font-semibold"
                          : "border text-sm rounded-full text-center bg-red-200 border-gray-200 px-2 py-1 text-red-800 font-semibold"
                      }
                    >
                      {transaction.status}
                    </div>
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {transaction.date}
                  </td>
                </React.Fragment>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
