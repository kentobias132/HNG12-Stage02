import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="container border rounded-2xl border-gray-600 px-4 mx-auto py-2 my-4 items-center flex justify-between">
      <div>
        <Image src={"/logo.png"} width={90} height={90} alt="logo image" />
      </div>
      <nav className="hidden text-white md:block">
        <ul className="flex gap-6 ">
          <li className="hover:text-gray-300">
            <Link href={"/"}>Event</Link>{" "}
          </li>
          <li className="hover:text-gray-300">
            <Link href={"/"}>My Tickets</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link href={"/"}>About Project</Link>
          </li>
        </ul>
      </nav>
      <Button variant={"outline"}>
        My Tickets <ArrowRight />{" "}
      </Button>
    </div>
  );
};

export default Header;
