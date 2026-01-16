import {  Trash } from "lucide-react";
import { useState } from "react";

const callsHistory = [
  { id: 1, name: "Alice", time: "10:00 AM", duration: "15 mins" },
  { id: 2, name: "Bob", time: "11:30 AM", duration: "30 mins" },
  { id: 3, name: "Charlie", time: "1:00 PM", duration: "45 mins" },
];
const CallsHistory = () => {
  const [history, sethistory] = useState(callsHistory);

  function deleteItem(id: number) {
    sethistory(history.filter((call) => call.id !== id));
  }
  return (
    <div>
      <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Calls History
        </h2>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Time</th>
              <th className="py-2 px-4 text-left">Duration</th>
              <th className="py-2 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {history.map((call) => (
              <tr key={call.id} className="border-b">
                <td className="py-2 px-4">{call.name}</td>
                <td className="py-2 px-4">{call.time}</td>
                <td className="py-2 px-4">{call.duration}</td>
                <td className="py-2 px-4 text-center">
                  <button onClick={() => deleteItem(call.id)} className="text-red-500 hover:scale-110 transition-all">
                    <Trash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CallsHistory;
