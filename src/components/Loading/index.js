import React from "react";
import Spinner from 'react-bootstrap/Spinner';


const Loading = () => {
  return (
    <div>
      <Spinner animation="border" role="status"/>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
