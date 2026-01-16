import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import MeetingRequests from "./MeetingRequests";
import { add } from "date-fns";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const events = [
  { date: "2026-01-10", title: "Meeting with investors" },
  { date: "2026-01-15", title: "Product Launch" },
  { date: "2026-01-22", title: "Quarterly Review" },
];


const Calender = () => {
  const [eventsList, setEventsList] = useState(events);
  const [value, onChange] = useState<Value>(new Date());

  function addEvent(date: string, title: string) {
    setEventsList(prev => [...prev, { date, title }]);
  console.log(date,title)
}

  return (
    <div className="mt-5 w-[100%] ">
      <Calendar
        onChange={onChange}
        value={value}
        tileContent={({ date, view }) => {
          const event = eventsList.find(
            (event) =>
              new Date(event.date).toDateString() === date.toDateString()
          );
          return event ? (
            <p className="text-[11px] text-start text-blue-600 pl-2 rounded-xl w-full bg-blue-100 truncate">{event.title}</p>
          ) : null;
        }}
      />
      <MeetingRequests 
      onAddMeeting={addEvent}
      />
    </div>
  );
};

export default Calender;
