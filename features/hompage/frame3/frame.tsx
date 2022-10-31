import Image from "next/image";
import React from "react";
import IMAGE from "../../../assets/png/ui2.png";
import { Button } from "../../../components/button/button";
import { Text } from "../../../components/typography/typography";

const Frame = () => {
  return (
    <div
      className="w-full flex justify-center items-center px-8 py-8 
    "
    >
      <div className="w-[35%] ">
        <Text
          variant="home_heading_3_32px"
          className="font-semibold text-[32px]"
        >
          Shop Your Way
        </Text>
        <Text variant="paragraph_3" className="font-normal text-[#A6A6A6]">
          Buy your favorite gadgets for fun or work, and return them later for
          swap or sell it back to Savvy – from anywhere. Enjoy special prices,
          deals. express delivery, and more
        </Text>
        <Button className="bg-white border border-[#00B0F0] w-[118px] h-[39px] rounded-lg mt-4">
          <Text variant="paragraph_4" className="font-light">
            Buy Now
          </Text>
        </Button>
      </div>
      <div className="w-[50%] flex justify-center items-center">
        <Image src={IMAGE} width="230" height="230" />
      </div>
    </div>
  );
};

export default Frame;
