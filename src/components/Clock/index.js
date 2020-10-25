import React, { useEffect, useState } from "react";
import { format } from "date-fns";


const Clock = () => {
  const [date, setDate] = useState("");
  useEffect(() => {
    const intervalId = setInterval(
      () => setDate(format(new Date(), "dd/MM/yyyy HH:mm:ss")),
      1000
    );
    return () => clearInterval(intervalId);
  }, []);
  return <>{date}</>;
};

export default Clock;
