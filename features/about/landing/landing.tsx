import Image from "next/image";
import React from "react";
import Mask from "../../../assets/png/mask.png";
import { Button } from "../../../components/button/button";
import { Text } from "../../../components/typography/typography";

function Landing() {
  return (
    <div className="heading w-full px-5 py-5 mt-3">
      <div className="w-full flex justify-around items-center">
        <div className="w-[50%]">
          <Text
            variant="home_heading_50px"
            className="font-extrabold text-[50px]"
          >
            One gadget need. More ways to own.
          </Text>
          <Text
            variant="paragraph_3"
            className="font-normal text-[#292D32] mb-4"
          >
            Savvy is the smartest way to buy and rent quality tech products
            without weighing it down in your pocket.
          </Text>
          <Button className="bg-[#00B0F0] w-[118px] h-[39px] rounded-lg mb-4">
            <Text variant="paragraph_3" className="font-medium">
              Try it Out
            </Text>
          </Button>
        </div>
        <div className="w-[50%]">
          <div className="w-full h-full">
            <Image src={Mask} width="595px" height={500} alt="Mask" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
