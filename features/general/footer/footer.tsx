import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";
import Logo from "../../../assets/png/logo.png";
import { Text } from "../../../components/typography/typography";

function footer() {
  return (
    <div className="w-full flex flex-col px-5">
      <div className="w-full flex justify-between h-full py-5 mb-10">
        <div className="w-[20%]">
          <div className="w-full">
            <Image src={Logo} alt="Logo" />
            <Text variant="paragraph_1" className="text-[#A6A6A6] font-light">
              The smartest way to buy and rent tech gadgets.
            </Text>
          </div>
        </div>
        <div className="flex flex-col space-y-1 items-start w-[20%]">
          <Text variant="paragraph_1" className="font-semibold">
            Website
          </Text>

          <Link href="#">
            <a>
              <Text variant="paragraph_3" className="font-light">
                Login
              </Text>
            </a>
          </Link>
          <Link href="#">
            <a>
              <Text variant="paragraph_3" className="font-light">
                Rent & Renew
              </Text>
            </a>
          </Link>
          <Link href="#">
            <a>
              <Text variant="paragraph_3" className="font-light">
                Buy & Return
              </Text>
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-1 items-start w-[20%]">
          <Text variant="paragraph_1" className="font-semibold">
            Company{" "}
          </Text>
          <Link href="#">
            <a>
              <Text variant="paragraph_3" className="font-light">
                About Us
              </Text>
            </a>
          </Link>

          <Link href="#">
            <a>
              <Text variant="paragraph_3" className="font-light">
                Contact Us
              </Text>
            </a>
          </Link>

          <Link href="/terms">
            <a>
              <Text variant="paragraph_3" className="font-light">
                Terms of Use
              </Text>
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-1 items-start w-[20%]">
          <Text variant="paragraph_1" className="font-semibold">
            Resources
          </Text>
          <Link href="/faq">
            <a>
              <Text variant="paragraph_3" className="font-light">
                FAQs
              </Text>
            </a>
          </Link>
          <Link href="#">
            <a>
              <Text variant="paragraph_3" className="font-light">
                Blog
              </Text>
            </a>
          </Link>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center space-y-5 items-center">
        <Text variant="paragraph_4" className="font-semibold">
          Info@savvy.africa
        </Text>
        <div className="flex justify-between items-center space-x-5">
          <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center shadow1">
            <Facebook color="#444444" size={18} fill="#444444" />
          </div>
          <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center shadow1">
            <Instagram color="#444444" size={18} />
          </div>
          <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center shadow1">
            <Twitter color="#444444" size={18} fill="#444444" />
          </div>
          <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center shadow1">
            <Linkedin color="#444444" size={18} fill="#444444" />
          </div>
        </div>
        <Text variant="paragraph_4" className="font-light text-[#A6A6A6]">
          © 2022 Savvy. All rights Reserved
        </Text>
      </div>
    </div>
  );
}

export default footer;
