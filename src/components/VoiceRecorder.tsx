'use client'
import React, { useState, useRef } from 'react';
import { Button, IconButton } from '@mui/material';
import { Mic, Stop, PlayArrow } from '@mui/icons-material';

const VoiceRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState('');
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;
    audioChunksRef.current = [];

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        audioChunksRef.current.push(event.data);
      }
    };

    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunksRef.current);
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudioURL(audioUrl);
    };

    mediaRecorder.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  return (
    <div>
      {recording ? (
        <IconButton color="primary" onClick={stopRecording}>
          <Stop />
        </IconButton>
      ) : (
        <IconButton color="primary" onClick={startRecording}>
          <Mic />
        </IconButton>
      )}
      {audioURL && (
        <div>
          <audio controls src={audioURL}></audio>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              // Handle saving or using the audio file here
              console.log('Audio URL:', audioURL);
            }}
          >
            Save Recording
          </Button>
        </div>
      )}
    </div>
  );
};

export default VoiceRecorder;
