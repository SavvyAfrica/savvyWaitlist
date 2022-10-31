import React from "react";
import { ArrowRight } from "react-feather";
import { Text } from "../../../components/typography/typography";

function Frame() {
  return (
    <div className="w-full flex flex-col justify-center  items-center mt-3">
      <div className="py-2 px-14 frame rounded-[10px]">
        <Text
          variant="home_heading_3_32px"
          className="font-semibold text-[#292D32]"
        >
          Save Beyond Your Expectations
        </Text>
      </div>
      <div className="w-[40%] mt-3 flex justify-center items-center mb-10">
        <Text
          variant="paragraph_3"
          className="font-normal text-center text-[#A6A6A6]"
        >
          Save on all the coolest gadgets you can’t live without and get access
          to a huge range of products from the newest computers to obscure
          gaming gadgets, drones, and more without the usual stress.
        </Text>
      </div>
      <div className="flex justify-around items-center">
        <div className="w-[50%]">
          <Text
            variant="paragraph_1"
            className="font-semibold text-[#292D32] underline mb-3"
          >
            Explore all features
          </Text>
          <Text
            variant="paragraph_4"
            className="font-normal text-[#A6A6A6] mb-3"
          >
            Take a quick tour and check out all that Savvy has to offer.
          </Text>
        </div>
        <div className="w-[80px] h-[80px] rounded-full bg-[#F4F7FE] flex justify-center items-center hover:scale-105 transition-all ease-in-out">
          <ArrowRight size={30} />
        </div>
      </div>
    </div>
  );
}

export default Frame;
