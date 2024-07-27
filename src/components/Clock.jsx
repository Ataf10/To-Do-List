import React, { useState } from "react";

const Clock = () => {
    let p = new Date();
  let t = new Date().toLocaleTimeString();
  const [time, setTime] = useState(t);
  let d = p.getDate() +"/"+(p.getMonth()+1)+"/"+p.getFullYear()

  setTimeout(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <div>
      <h2>{d}, {t}</h2>
    </div>
  );
};

export default Clock;
