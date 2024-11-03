import React, { useState } from 'react';

function SayHello() {
  const [message, setMessage] = useState("Hello! Enjoy the lab.");

  return <p>{message}</p>;
}

export default SayHello;
