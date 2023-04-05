import React from 'react';
import Button from './Button';

export default function BlueButton({ text, clickEvent }) {
  return (
    <Button
      text={text}
      clickEvent={clickEvent}
      mainColor="#3498db"
      subColor="#34495e"
      hoverColor="#2980b9"
    />
  );
}
