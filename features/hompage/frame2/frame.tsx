import Image from "next/image";
import React from "react";
import IMAGE from "../../../assets/png/ui.png";
import { Button } from "../../../components/button/button";
import { Text } from "../../../components/typography/typography";

const Frame = () => {
  return (
    <div
      className="w-full flex justify-center items-center px-8 py-8 
    "
    >
      <div className="w-[50%]">
        <Image src={IMAGE} width="230" height="230" />
      </div>
      <div className="w-[35%] ">
        <Text
          variant="home_heading_3_32px"
          className="font-semibold text-[32px]"
        >
          Rent With Ease
        </Text>
        <Text variant="paragraph_3" className="font-normal text-[#A6A6A6]">
          Rent tech products for a small amount, renew or end your subscription
          anytime through your account. Complete online verification, order,
          enjoy, and send it back.
        </Text>
        <Button className="bg-white border border-[#00B0F0] w-[118px] h-[39px] rounded-lg mt-4">
          <Text variant="paragraph_4" className="font-light">
            Rent Now
          </Text>
        </Button>
      </div>
    </div>
  );
};

export default Frame;
