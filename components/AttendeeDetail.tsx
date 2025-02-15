import React, { useState } from "react";
import ProgressIndicator from "./ProgressIndicator";
import AvatarUpload from "./AvatarUpload";
import Input from "./Input";
import Button from "./Custom-button";

interface AttendeeDetailProps {
  setImageUrl: (url: string) => void;
  setFullName: (e: string) => void;
  setEmail: (e: string) => void;
  setRequest: (e: string) => void;
  setStep: (prev: number) => void;
  onPrevClick: () => void;
  imageUrl: string;
  fullName: string;
  email: string;
  request: string;
}

const AttendeeDetail = ({
  setImageUrl,
  setStep,
  setFullName,
  setEmail,
  setRequest,
  onPrevClick,
  imageUrl,
  email,
  fullName,
  request,
}: AttendeeDetailProps) => {
  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    imageUrl?: string;
  }>({});

  const validateForm = () => {
    let tempErrors: { fullName?: string; email?: string; imageUrl?: string } =
      {};
    if (!fullName) tempErrors.fullName = "Full name is required.";
    if (!email || !/\S+@\S+\.\S+/.test(email))
      tempErrors.email = "Enter a valid email.";
    if (!imageUrl) tempErrors.imageUrl = "Please upload your photo";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setStep(3);
    }
  };
  const handleUpload = (url: string) => {
    setImageUrl(url);
    setErrors((prevErrors) => ({ ...prevErrors, imageUrl: undefined })); // Clear error when an image is uploaded
  };

  return (
    <div>
      <ProgressIndicator currentStep={2} stepDetail="Attendee Details" />
      <div className="container p-4 md:p-16 rounded-xl md:border-2 md:border-[#0E464F] bg-[#08252B] mx-auto px-4">
        <div className=" w-full p-6 border-2 border-lightBorder-300 text-white rounded-md ">
          <h2>Upload Profile Photo</h2>
          <div className="flex flex-col items-center justify-center bg-darkBg-100 mt-4">
            <AvatarUpload onUpload={handleUpload} />
            {errors.imageUrl && (
              <p className="text-red-500">{errors.imageUrl}</p>
            )}
          </div>
        </div>
        <div className="w-full h-0.5 mt-16 mb-8 bg-[#07373F]"></div>
        <div>
          <form onSubmit={handleSubmit}>
            <Input
              label="Enter your fullname*"
              type="text"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              error={errors.fullName}
              placeholder="Fullname"
            />
            <Input
              label="Enter your email Address*"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
            />

            <label
              htmlFor="request"
              className="block text-gray-200 font-medium mb-1"
            >
              Special Request?
            </label>
            <textarea
              id="request"
              value={request}
              onChange={(e) => setRequest(e.target.value)}
              className="w-full bg-transparent border-2 border-lightBorder-300 py-4 px-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brandColor-100"
              placeholder="Do you have special request"
            />
            <div className="flex flex-col-reverse md:flex-row justify-between gap-5 md:gap-10 pt-6 pb-10">
              <Button text="Back" onClick={onPrevClick} variant="secondary" />
              <Button
                text="Generate Ticket"
                // onClick={onGenerate}
                type="submit"
                variant="primary"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AttendeeDetail;
