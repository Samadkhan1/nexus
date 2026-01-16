import React, { useRef, useState } from "react";

const VideoCall: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [callStarted, setCallStarted] = useState(false);
  const [videoOn, setVideoOn] = useState(true);
  const [audioOn, setAudioOn] = useState(true);
  const [screenSharing, setScreenSharing] = useState(false);

  // Start Call
  const startCall = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      setCallStarted(true);
    } catch (error) {
      console.error("Media access error:", error);
    }
  };

  // End Call
  const endCall = () => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;

    setCallStarted(false);
    setScreenSharing(false);
  };

  // Toggle Video
  const toggleVideo = () => {
    const track = streamRef.current
      ?.getTracks()
      .find((t) => t.kind === "video");

    if (track) {
      track.enabled = !track.enabled;
      setVideoOn(track.enabled);
    }
  };

  // Toggle Audio
  const toggleAudio = () => {
    const track = streamRef.current
      ?.getTracks()
      .find((t) => t.kind === "audio");

    if (track) {
      track.enabled = !track.enabled;
      setAudioOn(track.enabled);
    }
  };

  // Screen Share
  const startScreenShare = async () => {
    if (screenSharing) return;

    try {
      const screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });

      const screenTrack = screenStream.getVideoTracks()[0];

      if (!streamRef.current) return;

      const videoTrack = streamRef.current
        .getTracks()
        .find((t) => t.kind === "video");

      if (videoTrack) {
        streamRef.current.removeTrack(videoTrack);
        videoTrack.stop();
      }

      streamRef.current.addTrack(screenTrack);

      if (videoRef.current) {
        videoRef.current.srcObject = streamRef.current;
      }

      setScreenSharing(true);

      screenTrack.onended = () => {
        startCall();
        setScreenSharing(false);
      };
    } catch (error) {
      console.error("Screen share error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-center mb-4">Video Call</h2>

        <div className="bg-black rounded-lg overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-96 object-cover"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {!callStarted ? (
            <button
              onClick={startCall}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Start Call
            </button>
          ) : (
            <>
              <button
                onClick={endCall}
                className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                End Call
              </button>

              <button
                onClick={toggleVideo}
                className="px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
              >
                {videoOn ? "Video Off" : "Video On"}
              </button>

              <button
                onClick={toggleAudio}
                className="px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
              >
                {audioOn ? "Mute" : "Unmute"}
              </button>

              <button
                onClick={startScreenShare}
                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                {screenSharing ? "Sharing Screen" : "Share Screen"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCall;
