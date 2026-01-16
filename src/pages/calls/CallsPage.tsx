import AddPrticipent from "../../components/callsPage/AddPrticipent";
import CallsHistory from "../../components/callsPage/CallsHistory";
import VideoCall from "../../components/callsPage/VideoCalls";

const CallsPage = () => {
  return (
    <div>
      <AddPrticipent />
      <VideoCall />
      <CallsHistory />
    </div>
  );
};

export default CallsPage;
