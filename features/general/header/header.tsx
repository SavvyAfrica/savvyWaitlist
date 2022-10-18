import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../assets/png/logo.png";
import { Button } from "../../../components/button/button";
import { Text } from "../../../components/typography/typography";

function header() {
  return (
    <>
      <div className="w-full flex justify-around px-5">
        <div className="border-2 w-[20%]">
          <Image src={Logo} alt="Logo" />
        </div>
        <div className="border-2 flex justify-around items-center w-[60%]">
          <Link href="#">
            <a>
              <Text variant="paragraph_4">Rent & Renew</Text>
            </a>
          </Link>
          <Link href="h"><a><Text variant="paragraph_4">Buy & Return</Text></a></Link>
          <Link href="t">
            <a>
              <Text variant="paragraph_4">About Us</Text>
            </a>
          </Link>
          <Link href="b">
            <a>
              <Text variant="paragraph_4">Blog</Text>
            </a>
          </Link>
          <Link href="6">
            <a>
              <Text variant="paragraph_4">Contact us</Text>
            </a>
          </Link>
        </div>
        <div className="border-2 flex justify-between items-center w-[20%]">
          <Button>
            <Text variant="paragraph_4">Login</Text>
          </Button>
          <Button className="bg-[#00B0F0] w-[118px] h-[39px] rounded-lg">
            <Text variant="paragraph_4">Get Started</Text>
          </Button>
        </div>
      </div>
    </>
  );
}

export default header;
