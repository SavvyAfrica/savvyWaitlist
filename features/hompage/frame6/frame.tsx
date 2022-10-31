import Image from "next/image";
import React from "react";
import Phones from "../../../assets/png/phones.png";
import { Button } from "../../../components/button/button";
import { Text } from "../../../components/typography/typography";

function Frame() {
  return (
    <div
      className="w-full flex justify-center items-center px-8 py-8 
    "
    >
      <div className="w-[38%] space-y-2">
        <Text
          variant="home_heading_3_32px"
          className="font-semibold text-[32px]"
        >
          Gadget subscription made for everyone
        </Text>
        <Button className="bg-[#00B0F0] text-white w-[118px] h-[39px] rounded-lg mt-4">
          <Text variant="paragraph_4" className="font-light">
            Get Started
          </Text>
        </Button>
        <Text variant="paragraph_4" className="font-normal text-black">
          *Additional fee applies for damages or replacement.
        </Text>
        <Text variant="paragraph_4" className="font-normal text-black">
          *Restrictions apply to unverifiable users.
        </Text>
        <Text variant="paragraph_4" className="font-normal text-black">
          *Read our terms of use at sign-up.
        </Text>
      </div>
      <div className="w-[50%] flex justify-center items-center">
        <Image src={Phones} width="700" height="500" />
      </div>
    </div>
  );
}

export default Frame;
