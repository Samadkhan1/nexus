"use client";

import { Plus, Clock } from "lucide-react";
import { useState } from "react";
import AvailabilityModal from "./AvailabilityModal";

type Slot = {
  id: string;
  day: string;
  time: string;
};

const Availability = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [slots, setSlots] = useState<Slot[]>([
    { id: "1", day: "Monday", time: "9:00 AM - 5:00 PM" },
    { id: "2", day: "Tuesday", time: "10:00 AM - 4:00 PM" },
    { id: "3", day: "Wednesday", time: "9:00 AM - 5:00 PM" },
  ]);

  function removeSlot(id: string) {
    setSlots(prev => prev.filter(slot => slot.id !== id));
  }

  function addSlot(slot: { day: string; time: string }) {
    setSlots(prev => [
      ...prev,
      {
        id: crypto.randomUUID(),
        day: slot.day,
        time: slot.time,
      },
    ]);
  }

  return (
    <div className="bg-white w-[40%] mt-5 p-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="flex gap-2 text-lg items-center font-semibold">
          <Clock />
          Availability
        </h1>

        <button
          onClick={() => setModalIsOpen(true)}
          className="hover:bg-gray-100 p-1 rounded"
        >
          <Plus />
        </button>
      </div>

      {/* Slots */}
      <div className="flex flex-col gap-2 mt-4">
        {slots.map(slot => (
          <div key={slot.id} className="border border-gray-300 p-3">
            <h1>Available</h1>
            <p className="text-[12px] text-gray-500">
              {slot.day}, {slot.time}
            </p>

            <button
              onClick={() => removeSlot(slot.id)}
              className="text-red-500 text-[12px] mt-2 hover:bg-gray-100 px-2 py-1"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalIsOpen && (
        <AvailabilityModal
          onClose={() => setModalIsOpen(false)}
          onAddSlot={addSlot}
        />
      )}
    </div>
  );
};

export default Availability;
