import React from "react";

const Loading:React.FC = () => {
  return (
    <div className="flex justify-between items-center h-screen flex-col">
      <span className="loading loading-bars loading-lg"></span>
    </div>
  );
};

export default Loading;
