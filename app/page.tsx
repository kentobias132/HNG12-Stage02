"use client";
import AttendeeDetail from "@/components/AttendeeDetail";
import Confirmation from "@/components/Confirmation";
import EventSelection from "@/components/EventSelection";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";

const page = () => {
  const [step, setStep] = useState(1);
  const [ticketType, setTicketType] = useState("");
  const [ticketNumber, setTicketNUmber] = useState(1);
  const [imageUrl, setImageUrl] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  //   const handleTicketType = (tickType: string) => {
  //     setTicketType(tickType);
  //   };

  //   const handleTicketNumber = ({ target }) => {
  //     setTicketNUmber(target.value);
  //   };

  return (
    <div className="px-4">
      <Header />
      <div className=" container mx-auto border-2 p-4 md:p-16 rounded-xl  border-[#0E464F] bg-[#041E23] ">
        {step === 1 && (
          <div>
            <EventSelection
              onBtnClick={nextStep}
              onTicketTypeClick={setTicketType}
              onTicketNumClick={setTicketNUmber}
              ticketCount={ticketNumber}
              ticketType={ticketType}
            />
          </div>
        )}
        {step === 2 && (
          <AttendeeDetail
            email={email}
            fullName={fullName}
            onPrevClick={prevStep}
            setImageUrl={setImageUrl}
            imageUrl={imageUrl}
            setEmail={setEmail}
            setFullName={setFullName}
            setStep={setStep}
            request={specialRequest}
            setRequest={setSpecialRequest}
          />
        )}
        {step === 3 && (
          <Confirmation
            email={email}
            fullname={fullName}
            imageUrl={imageUrl}
            ticketNumber={ticketNumber}
            ticketType={ticketType}
            setStep={setStep}
            request={specialRequest}
          />
        )}
      </div>
    </div>
  );
};

export default page;

// import MultiStepForm from "@/components/MultiStepForm";
// import React from "react";

// const page = () => {
//   return (
//     <div>
//       <MultiStepForm />
//     </div>
//   );
// };

// export default page;
