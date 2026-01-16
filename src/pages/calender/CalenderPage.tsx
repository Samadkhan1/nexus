import Availability from "../../components/CalenderPage/Availability";
import Calender from "../../components/CalenderPage/Calender";

const CalenderPage = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold">Meeting Scheduler</h1>
      </div>
      <div className="flex  gap-2 items-start ">
        <Calender />
        <Availability />
      </div>
    </div>
  );
};

export default CalenderPage;
