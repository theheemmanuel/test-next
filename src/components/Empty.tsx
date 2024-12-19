import Image from "next/image";
import React from "react";

const Empty = ({ textBody }: { textBody: string }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src="/assets/images/empty.png"
        alt="empty box"
        width={250}
        height={250}
      />
      <h1 className="font-bold text-lg">Oops, nothing to show here!</h1>
      <p>{textBody}</p>
    </div>
  );
};

export default Empty;
