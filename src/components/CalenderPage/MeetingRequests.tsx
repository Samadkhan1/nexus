import { Cross, Plus } from "lucide-react";
import { useState } from "react";

const requests = [
  {
    id: "1",
    title: "Team Meeting",
    from: "John Doe",
    date: "2026-01-21",
  },
  {
    id: "2",
    title: "Client Presentation",
    from: "John Doe",
    date: "2026-01-25",
  },
];

const MeetingRequests = ({
  onAddMeeting,
}: {
  onAddMeeting: (date: string, title: string) => void;
}) => {
  const [requestsList, setRequestsList] = useState(requests);

  const removeRequest = (id: string) => {
    setRequestsList((prev) => prev.filter((request) => request.id !== id));
  };
  return (
    <div className="mt-5 w-[100%]  p-4 bg-white">
      <h1>Meeting Requests</h1>
      {requestsList.length >= 0 ? (
        requestsList.map((request) => (
          <div
            key={request.id}
            className="border flex justify-between items-center border-gray-300 p-3 mt-2"
          >
            <div className="">
              <div className="flex items-end gap-2">
                <h2 className="font-semibold">{request.title}</h2>
                <p className="text-sm text-gray-500">From: {request.from}</p>
              </div>
              <p className="text-sm text-gray-500">Date: {request.date}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  removeRequest(request.id);
                }}
                className="mt-2 px-4 py-2 flex bg-red-500 text-white rounded hover:bg-red-400"
              >
                <Plus /> Decline
              </button>
              <button
                onClick={() => {
                  onAddMeeting(request.date, request.title);
                  removeRequest(request.id);
                }}
                className="mt-2 px-4 py-2 flex bg-blue-500 text-white rounded hover:bg-blue-400"
              >
                <Plus /> Accept
              </button>
            </div>
          </div>
        ))
      ) : (
        <h1 className="mt-4 text-gray-500">No Meeting Requests</h1>
      )}
    </div>
  );
};

export default MeetingRequests;
