import React from "react";
import { Text } from "../../../components/typography/typography";

function TopSection() {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-4 mb-4">
      <Text variant="home_heading_4_32px" className="font-bold text-center">
        How can we help you?
      </Text>
      <div className="w-[50%] mt-6 relative">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search the most asked questions"
          className="w-full h-12 rounded-[10px] search px-4 active:border-[#00B0F0] focus:outline-none"
        />
        <span className="bg-[#00B0F0] absolute right-0 w-[calc(100%-550px)] top-0 rounded-r-md  h-full flex justify-center items-center text-white cursor-pointer">
          Search
        </span>
      </div>
    </div>
  );
}

export default TopSection;
