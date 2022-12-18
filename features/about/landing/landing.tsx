import Image from "next/image";
import Link from "next/link";
import React from "react";
import About from "../../../assets/png/About.png";
import { Button } from "../../../components/button/button";
import { Text } from "../../../components/typography/typography";

function Landing() {
  return (
    <div className="heading w-full px-5 py-5 mt-3">
      <div className="w-full flex justify-between items-center">
        <div className="w-[50%]">
          <Text
            variant="home_heading_50px"
            className="font-extrabold text-[50px]"
          >
            About Savvy
          </Text>
          <Text
            variant="paragraph_3"
            className="font-normal text-[#292D32] mb-4"
          >
            Savvy is a revolutionary gadget subscription platform that Africans
            love. We are relentless in giving you access to the best and most
            modern technology without letting it take a backseat to your pocket.
            On top of that, we help you reduce electronic waste which is good
            for the planet. So, why wait?
          </Text>
          <Link href={"/about"}>
            <a className="text-[#00B0F0] underline font-medium cursor-pointer">
              So why wait?
            </a>
          </Link>
        </div>
        <div className="w-[50%] flex items-end justify-end">
          <div className="w-full h-full flex items-end justify-end">
            <Image src={About} alt="Mask" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
