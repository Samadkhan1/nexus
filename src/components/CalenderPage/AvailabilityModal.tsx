"use client";

import { X } from "lucide-react";
import { useState } from "react";

type Props = {
  onClose: () => void;
  onAddSlot: (slot: { day: string; time: string }) => void;
};

const AvailabilityModal = ({ onClose, onAddSlot }: Props) => {
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!day || !time) return;

    onAddSlot({ day, time });
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white w-72 p-4 rounded-lg">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold">Add Availability</h1>
          <button
            onClick={onClose}
            className="hover:bg-gray-100 p-1 rounded"
          >
            <X />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="flex flex-col">
            <label>Enter Day</label>
            <input
              type="text"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              placeholder="Monday"
              className="border-2 border-gray-300 mt-2 px-2 py-1"
            />
          </div>

          <div className="flex flex-col mt-3">
            <label>Enter Time</label>
            <input
              type="text"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="9:00 AM - 5:00 PM"
              className="border-2 border-gray-300 mt-2 px-2 py-1"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white w-full mt-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Add Slot
          </button>
        </form>
      </div>
    </div>
  );
};

export default AvailabilityModal;
