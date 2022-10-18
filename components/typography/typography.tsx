const styles = {
  home_heading_50px:
    "font-Manrope font-extrabold text-[50px] leading-[50px] text-[#000000]", 
  home_heading_2_40px:
    "font-Manrope font-extrabold text-[40px] leading-[40px] text-[#000000]",
  home_heading_3_32px:
    "font-Manrope font-bold text-[32px] leading-[32px] text-[#000000]",
  home_heading_4_32px:
    "font-Manrope font-semibold text-[32px] leading-[32px] text-[#000000]",
  paragraph_1:
    "font-Manrope font-semibold text-xl leading-[20px] text-[#000000]",
  paragraph_2:
    "font-Manrope font-medium text-lg leading-[18px] text-[#000000]",
  paragraph_3:
    "font-Manrope font-medium text-base leading-[16px] text-[#000000]",
  paragraph_4:
    "font-Manrope font-medium text-sm leading-[14px] text-[#000000]",
  // lowest_body_medium:
  //   "font-Mplus font-[600] text-[12px] leading-[18px] text-flipeet-black",
  // lowest_body_regular:
  //   "font-Mplus font-[400] text-[12px] leading-[18px] text-flipeet-black",
  // lower_body_bold:
  //   "font-Mplus font-[700] text-[14px] leading-[20px] text-flipeet-black",
  // lower_body_medium:
  //   "font-Mplus font-[600] text-[14px] leading-[20px] text-flipeet-black",
  // lower_body_regular:
  //   "font-Mplus font-[400] text-[14px] leading-[20px] text-flipeet-black",
  // low_body_bold:
  //   "font-Mplus font-[700] text-[16px] leading-[22px] text-flipeet-black",
  // low_body_medium:
  //   "font-Mplus font-[600] text-[16px] leading-[22px] text-flipeet-black",
  // low_body_regular:
  //   "font-Mplus font-[400] text-[16px] leading-[22px] text-flipeet-black",
  // body_bold:
  //   "font-Mplus font-[700] text-[18px] leading-[24px] text-flipeet-black",
  // body_medium:
  //   "font-Mplus font-[600] text-[18px] leading-[24px] text-flipeet-black",
  // body_regular:
  //   "font-Mplus font-[400] text-[18px] leading-[24px] text-flipeet-black",
  // subtext_bold:
  //   "font-Mplus font-[700] text-[20px] leading-[26px] text-flipeet-black",
  // subtext_medium:
  //   "font-Mplus font-[600] text-[20px] leading-[26px] text-flipeet-black",
  // subtext_regular:
  //   "font-Mplus font-[400] text-[20px] leading-[26px] text-flipeet-black",
  // lower_title_medium:
  //   "font-Mplus font-[500] text-[25px] leading-[31px] text-flipeet-black",
  // low_title_bold:
  //   "font-Mplus font-[700] text-[30px] leading-[36px] text-flipeet-black",
  // low_title_medium:
  //   "font-Mplus font-[500] text-[30px] leading-[36px] text-flipeet-black",
};

const convertVariant = (item: any) => {
  if (item === "home_heading_50px")
    return styles.home_heading_50px;
  if (item === "home_heading_2_40px")
    return styles.home_heading_2_40px;
  if (item === "home_heading_3_32px")
    return styles.home_heading_3_32px;
  if (item === "home_heading_4_32px") return styles.home_heading_4_32px;
  if (item === "paragraph_1") return styles.paragraph_1;
  if (item === "paragraph_2") return styles.paragraph_2;
  if (item === "paragraph_3") return styles.paragraph_3;
  if (item === "paragraph_4") return styles.paragraph_4;
  // if (item === "lowest_body_medium") return styles.lowest_body_medium;
  // if (item === "lowest_body_regular") return styles.lowest_body_regular;
  // if (item === "lower_body_bold") return styles.lower_body_bold;
  // if (item === "lower_body_medium") return styles.lower_body_medium;
  // if (item === "lower_body_regular") return styles.lower_body_regular;
  // if (item === "low_body_bold") return styles.low_body_bold;
  // if (item === "low_body_medium") return styles.low_body_medium;
  // if (item === "low_body_regular") return styles.low_body_regular;
  // if (item === "body_bold") return styles.body_bold;
  // if (item === "body_medium") return styles.body_medium;
  // if (item === "body_regular") return styles.body_regular;
  // if (item === "subtext_bold") return styles.subtext_bold;
  // if (item === "subtext_medium") return styles.subtext_medium;
  // if (item === "subtext_regular") return styles.subtext_regular;
  // if (item === "lower_title_medium") return styles.lower_title_medium;
  // if (item === "low_title_bold") return styles.low_title_bold;
  // if (item === "low_title_medium") return styles.low_title_medium;
};

export const Text = (props: IText) => {
  const { children, className, variant, onClick } = props;
  const style = convertVariant(variant);
  return (
    <p className={`${style} ${className ?? ""} `} onClick={onClick}>
      {children}
    </p>
  );
};