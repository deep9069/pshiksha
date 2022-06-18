import React from "react";

export const Recommended = () => {

  const message = () => {
    console.log("Hello World!") 
   }

  return (
    <button onClick={message}> Press me to print a message! </button>
  );
};
