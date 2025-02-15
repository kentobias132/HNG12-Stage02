import React from "react";
import ProgressIndicator from "./ProgressIndicator";
import { MapPin } from "lucide-react";
import Button from "./Custom-button";

interface ConfirmationProps {
  imageUrl: string;
  fullname: string;
  setStep: (step: number) => void;
  email: string;
  ticketType: string;
  ticketNumber: number;
  request: string;
}

const Confirmation = ({
  fullname,
  email,
  ticketNumber,
  ticketType,
  imageUrl,
  setStep,
  request,
}: ConfirmationProps) => {
  const handleNewTicket = () => {
    setStep(1);
  };

  return (
    <div>
      <ProgressIndicator currentStep={3} stepDetail="Ready" />
      <div className="text-white flex flex-col items-center justify-center">
        <div className="py-4 font-inter">
          <h1 className="font-semibold text-2xl md:text-4xl">
            Your Ticket is Booked!
          </h1>
          <p className="py-4">
            Check your email for a copy or you can download
          </p>
        </div>
        <div
          style={{ backgroundImage: "url('./bg.png')" }}
          className="relative h-[600px] w-[300px] p-5"
        >
          <div className="border flex flex-col items-center p-2 rounded-lg border-brandColor-100">
            <div className="text-center">
              <h1 className="font-roadRage text-4xl py-2">
                Techember Fest ”25
              </h1>
              <div className="">
                <div className="flex text-xs flex-col pb-2 gap-2 items-center">
                  <p>📍 Purple Mall Ikeja, Lagos</p>
                  <p>📅 March 15, 2025 | 7:00 AM</p>
                </div>
              </div>
            </div>

            <div
              style={{ backgroundImage: `url(${imageUrl})` }}
              className=" bg-cover bg-center w-40 h-40 border-4 bg-lightBg-100 border-brandColor-100 rounded-2xl"
            ></div>
            <div className="grid grid-cols-2 mt-2 border border-lightBorder-200 bg-[#08343C] rounded-lg p-2">
              <div className="border-b py-0.5 border-r border-lightBorder-200">
                <p className="text-xs text-gray-400 ">Your Name</p>
                <h3 className="text-sm font-semibold truncate">{fullname}</h3>
              </div>
              <div className="border-b py-0.5 px-2 border-lightBorder-200">
                <p className="text-xs text-gray-400 ">Your email</p>
                <h3 className="text-sm font-semibold truncate">{email}</h3>
              </div>
              <div className="border-b py-0.5 border-r border-lightBorder-200">
                <p className="text-xs text-gray-400 ">Ticket Type</p>
                <h3 className="text-sm">{ticketType}</h3>
              </div>
              <div className="border-b py-0.5 px-2 border-lightBorder-200">
                <p className="text-xs text-gray-400 ">Ticket for:</p>
                <h3 className="text-sm">{ticketNumber} </h3>
              </div>
              <div className="col-span-2 py-0.5 ">
                <p className="text-xs text-gray-400 ">Special Request</p>
                <h3 className=" line-clamp-2 text-sm">{request}</h3>
              </div>
            </div>
          </div>
          <div className=" mt-10 flex justify-center items-end">
            <div
              style={{ backgroundImage: "url('./barCode.png')" }}
              className="h-[68px] w-[236px]"
            ></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between gap-5 md:gap-10 pt-24 pb-10">
        <Button
          text="Book Another Ticket"
          variant="secondary"
          onClick={handleNewTicket}
        />
        <Button text="Download Ticket" />
      </div>
    </div>
  );
};

export default Confirmation;
