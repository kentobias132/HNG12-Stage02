import React from "react";
import ProgressIndicator from "./ProgressIndicator";
import Button from "./Custom-button";

interface EventSelectionProps {
  ticketCount: number;
  ticketType: string;
  onTicketTypeClick: (type: string) => void;
  onTicketNumClick: (e: number) => void;
  onBtnClick: () => void;
}

const ticketData = [
  {
    id: 1,
    ticketType: "regular",
    price: "Free",
    slot: "20/52",
  },
  {
    id: 2,
    ticketType: "vip",
    price: "$50",
    slot: "20/52",
  },
  {
    id: 3,
    ticketType: "vvip",
    price: "$150",
    slot: "20/52",
  },
];

const EventSelection = ({
  ticketCount,
  ticketType,
  onTicketTypeClick,
  onTicketNumClick,
  onBtnClick,
}: EventSelectionProps) => {
  return (
    <div>
      <ProgressIndicator currentStep={1} stepDetail="Ticket Selection" />
      <div className="container p-4 md:p-16 rounded-xl md:border-2 md:border-[#0E464F] bg-[#08252B] mx-auto px-4">
        <div className=" w-full font-inter py-6 px-2 border-2 border-lightBorder-300 text-white flex justify-center text-center rounded-md bg-gradient-to-br from-[#02333b] via-[#063d46] to-darkBg-100">
          <div>
            <h1 className="font-roadRage text-4xl py-2 md:text-7xl">
              Techember Fest ”25
            </h1>
            <div className="text-sm md:text-lg">
              <p className=" md:text-lg text-orange-">
                Join us for an unforgettable experience at{" "}
              </p>
              <p>Tech4Good! Secure your spot now.</p>
              <div className="flex flex-col md:flex-row py-2 gap-2 items-center">
                <p> 📍 Purple Mall Ikeja</p>
                <span className="hidden md:block">|</span>{" "}
                <p>📅 March 15, 2025 | 7:00 AM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-0.5 mt-16 mb-8 bg-[#07373F]"></div>
        <div className="text-white py-8 font-inter">
          <h3 className="font-inter font-semibold text-lg md:text-2xl">
            Select Ticket
          </h3>
          <div className="grid bg-[#052228] border-2 p-4 rounded-xl border-[#07373F] grid-cols-1 md:grid-cols-3 gap-10 mt-4">
            {ticketData.map((data) => (
              <div
                key={data.id}
                onClick={() => onTicketTypeClick(data.ticketType)}
                className={`${
                  data.ticketType === ticketType
                    ? "bg-[#12464E] text-white"
                    : "bg-transparent"
                } p-4 hover:scale-105 ease-linear rounded-lg border-2 border-[#197686] items-center cursor-pointer `}
              >
                <div className="font-semibold text-2xl">{data.price}</div>
                <div>
                  <h2>{data.ticketType.toUpperCase()} ACCESS</h2>{" "}
                  <p className="text-xs md:text-sm">{data.slot}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="py-8">
          <label className="block font-inter text-white mb-2 font-semibold text-lg md:text-2xl">
            Number of Tickets
          </label>
          <select
            value={ticketCount}
            onChange={(e) => onTicketNumClick(Number(e.target.value))}
            className="w-full bg-transparent border-2 border-lightBorder-300 py-4 px-2 rounded-md text-white"
          >
            {[...Array(10).keys()].map((n) => (
              <option className="text-black" key={n + 1} value={n + 1}>
                {n + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between gap-5 md:gap-10 pt-6 pb-10">
          <Button text="Cancel" variant="secondary" />
          <Button
            text="Next"
            onClick={onBtnClick}
            variant="primary"
            disabled={!ticketType}
          />
        </div>
      </div>
    </div>
  );
};

export default EventSelection;
