import React, { useState } from 'react';
import { ReactMic, BlobEvent, ReactMicStopEvent } from 'react-mic';

const VoiceRecorder: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = () => {
    setIsRecording(true);
  }

  const stopRecording = () => {
    setIsRecording(false);
  }

  const onData = (recordedBlob: BlobEvent) => {
    console.log('chunk of real-time data is: ', recordedBlob);
  }

  const onStop = (recordedBlob: ReactMicStopEvent) => {
    console.log('recordedBlob is: ', recordedBlob);
  }

  return (
    <div>
      <ReactMic
        record={isRecording}
        className="sound-wave"
        onStop={onStop}
        onData={onData}
        strokeColor="#000000"
        backgroundColor="#FF4081" />
      <button onClick={startRecording} type="button">Start</button>
      <button onClick={stopRecording} type="button">Stop</button>
    </div>
  );
};

export default VoiceRecorder;