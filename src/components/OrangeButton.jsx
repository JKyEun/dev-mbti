import React from 'react';
import Button from './Button';

export default function OrangeButton({ text, clickEvent }) {
  return (
    <Button
      text={text}
      clickEvent={clickEvent}
      mainColor="#e67e22"
      subColor="#c0392b"
      hoverColor="#d35400"
    />
  );
}
