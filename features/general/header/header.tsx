import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../assets/png/log.png";
import { Button } from "../../../components/button/button";
import { Text } from "../../../components/typography/typography";

function header() {
  return (
    <>
      <div className="w-full flex justify-around shadow2 px-5 sticky">
        <div className="w-[20%]">
          <Image src={Logo} alt="Logo" />
        </div>
        <div className="flex justify-around items-center w-[60%]">
          <Link href="#">
            <a>
              <Text variant="paragraph_4" className="font-light">
                Rent & Renew
              </Text>
            </a>
          </Link>
          <Link href="h">
            <a>
              <Text variant="paragraph_4" className="font-light">
                Buy & Return
              </Text>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <Text variant="paragraph_4" className="font-light">
                About Us
              </Text>
            </a>
          </Link>
          <Link href="/blog">
            <a>
              <Text variant="paragraph_4" className="font-light">
                Blog
              </Text>
            </a>
          </Link>
          <Link href="6">
            <a>
              <Text variant="paragraph_4" className="font-light">
                Contact us
              </Text>
            </a>
          </Link>
        </div>
        <div className="flex justify-between items-center w-[20%]">
          <Button>
            <Text variant="paragraph_4" className="font-light">
              Login
            </Text>
          </Button>
          <Button className="bg-[#00B0F0] w-[118px] h-[39px] rounded-lg">
            <Text variant="paragraph_4" className="font-light text-white">
              Get Started
            </Text>
          </Button>
        </div>
      </div>
    </>
  );
}

export default header;
