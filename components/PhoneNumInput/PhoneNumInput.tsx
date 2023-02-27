import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Label } from "../Label/Label";

interface ICountryState {
    countries: Array<any>;
}

interface IMyProps {
    phoneNumber: string;
    phoneNumberError: string | undefined;
    countryCode: string;
    handleChange: (e: any) => void;
}

const PhoneNumInput = ({phoneNumber, phoneNumberError, countryCode, handleChange}: IMyProps) => {
  const [countryState, setCountryState] = useState<ICountryState>({countries: []});


  useEffect(() => {
    async function fetchData(){
      try {
        //  fetch data
        const dataUrl = `https://restcountries.com/v3.1/name/nigeria`;
        const response = await fetch(dataUrl);
        const data = await response.json();

        setCountryState({
          ...countryState,
          countries: data,
        });

      } catch (error) {
        setCountryState({
          ...countryState,
        });
      }
    };

    fetchData();
  }, []);
  

  const { countries } = countryState;



  // find selected country data
  // search selected country
  const searchSelectedCountry = countries.find((obj: any) => {
    if (obj.name.common === countryCode) {
      return true;
    }
    return false;
  });


  return (
    <React.Fragment>
      <div className="pb-1.5 mb-1.5">
        <select
          name='countryCode'
          id='countryCode'
          value={countryCode}
          onChange={handleChange}
          className={`block text-black flex-auto w-full p-2 rounded bg-white 
            border-[#DFDFE6] border outline-[#DFDFE6] outline-0 text-sm`}
          >
          {countries.map((item) => {
            return (
              <option key={uuidv4()} value={item.name.common}>
                {item.name.common}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        {searchSelectedCountry && (
          <>
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <div className="flex sm:flex-row flex-col sm:space-x-4 space-x-0 sm:h-[44px] h-auto">
              <div className="w-[50px] flex items-end border-b-2 border-gray-500 pb-2 sm:mb-0 mb-4">
                <img
                  className="w-[100%] h-[70%] inline-block"
                  src={
                    searchSelectedCountry &&
                    searchSelectedCountry.flags.png
                  }
                  alt="flag"
                />
              </div>

              <div className="sm:w-auto w-[100px] sm:mb-0 mb-4 flex items-end border-b-2 border-gray-500 pb-2">
                <p className="text-base leading-6">
                  {searchSelectedCountry &&
                    searchSelectedCountry.idd.root}
                  {searchSelectedCountry &&
                    searchSelectedCountry.idd.suffixes}
                </p>
              </div>

              <input
                id="phoneNumber"
                type="tel"
                value={phoneNumber}
                name="phoneNumber"
                onChange={handleChange}
                placeholder="Phone Number"
                className={`block text-black flex-auto w-full p-2 rounded bg-white border outline-[#DFDFE6] 
                  outline-0 placeholder:text-sm text-sm ${phoneNumberError ? 'border-red-600' : 'border-[#DFDFE6]'}`}
              />
            </div>
            {phoneNumberError && <h3 className="text-red-600 text-xs text-right pt-1">{phoneNumberError}</h3>}
          </>
        )}
      </div>
    </React.Fragment>
  );
};

export default PhoneNumInput;
