import React from 'react';
import { Button } from './StatusButtonStyle';

const StatusButton = ({ text, status, setStatus }) => {
  return (
    <Button
      onClick={() => {
        setStatus(text);
      }}
      status={text === status}
    >
      {text}
    </Button>
  );
};

export default StatusButton;
