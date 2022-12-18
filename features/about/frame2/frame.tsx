import Image from "next/image";
import React from "react";
import { Text } from "../../../components/typography/typography";

function Frame() {
  return (
    <div className="w-full flex flex-col justify-center items-center relative py-5 mt-5">
      <div>
        <Text variant="home_heading_4_32px" className="font-bold text-center">
          Meet some of the Team
        </Text>
      </div>
      <div className="absolute top-7">
        <Image src={"/Decore.svg"} width={400} height={100} />
      </div>
      <div className="w-[50%] mt-6">
        <Text
          variant="paragraph_3"
          className="font-normal text-center text-[#A6A6A6]"
        >
          We are a group of optimistic and ambitious people working hard to
          empower everyone to choose affordable and environmentally friendly
          ways to get tech products.
        </Text>
      </div>
    </div>
  );
}

export default Frame;
