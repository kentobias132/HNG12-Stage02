import React from "react";

interface IndicatorProps {
  currentStep: number;
  totalSteps?: number;
  stepDetail: string;
}

const ProgressIndicator = ({
  currentStep,
  totalSteps = 3,
  stepDetail,
}: IndicatorProps) => (
  <div className="container mx-auto p-4">
    <div className="flex text-white items-start flex-col  md:flex-row md:justify-between md:items-center">
      <h2 className="text-2xl md:text-4xl mb-2">{stepDetail}</h2>
      <p>
        Step {currentStep}/{totalSteps}{" "}
      </p>
    </div>
    <div className="container h-2 bg-lightBorder-200 rounded-lg mx-auto flex mb-5">
      {Array.from({ length: totalSteps }, (_, i) => (
        <div
          key={i}
          className={`h-2 w-full rounded-lg ${
            i < currentStep ? " -ml-2 bg-brandColor-100" : "bg-lightBorder-200"
          }`}
        ></div>
      ))}
    </div>
  </div>
);

export default ProgressIndicator;
