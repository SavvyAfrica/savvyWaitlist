import React from "react";
import { Text } from "../../../components/typography/typography";

function Frame() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[50%] py-4 frame rounded-[10px] flex justify-evenly items-center">
        <div>
          <Text
            variant="paragraph_1"
            className="font-semibold text-center text-[#00B0F0]"
          >
            2022
          </Text>
          <Text variant="paragraph_2" className="font-light text-[#292D32]">
            Year founded
          </Text>
        </div>
        <div>
          <Text
            variant="paragraph_1"
            className="font-semibold text-[#00B0F0] text-center"
          >
            7
          </Text>
          <Text variant="paragraph_2" className="font-light text-[#292D32]">
            Team Size
          </Text>
        </div>
        <div>
          <Text
            variant="paragraph_1"
            className="font-semibold text-[#00B0F0] text-center"
          >
            50+
          </Text>
          <Text variant="paragraph_2" className="font-light text-[#292D32]">
            Satisfied Users
          </Text>
        </div>
      </div>
    </div>
  );
}

export default Frame;
