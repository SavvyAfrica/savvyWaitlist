import React, { useState } from 'react';
import SetupAccountModal from './SetupAccountModal';
import VerifyEmp_StudModal from './VerifyEmp_StudModal';
import VerifyEmployeeCompanyModal from './VerifyEmployeeCompanyModal';
import { BsArrowRight } from 'react-icons/bs';


const VerificationOptions = () => {
    const [showsetupAccModal, setShowSetupAccModal] = useState(false);
    const [showVerifyEmp_StudModal, setShowVerifyEmp_StudModal] = useState(false);
    const [showVerifyEmployeeCompModal, setShowVerifyEmployeeCompModal] = useState(false);


    const conditionalComponent = () => {
      if(showVerifyEmp_StudModal){
        return <VerifyEmp_StudModal setShowVerifyEmp_StudModal={setShowVerifyEmp_StudModal} />

      }else if(showVerifyEmployeeCompModal){
        return <VerifyEmployeeCompanyModal setShowVerifyEmployeeCompModal={setShowVerifyEmployeeCompModal} />
      }
    };


  return (
    <>
      <div 
        className="w-[40px] h-[40px] rounded-full bg-[#F4F7FE] hover:bg-[#dcebf9] flex items-center justify-center sm:ml-auto ml-0 cursor-pointer"
        onClick={() => setShowSetupAccModal(true)}
      >
        <BsArrowRight />
      </div>

      {showsetupAccModal ? 
        <SetupAccountModal 
          setShowSetupAccModal={setShowSetupAccModal} 
          setShowVerifyEmp_StudModal={setShowVerifyEmp_StudModal} 
          setShowVerifyEmployeeCompModal={setShowVerifyEmployeeCompModal}
        /> : 
        null
      }

      {conditionalComponent()}
    </>
  )
}

export default VerificationOptions;