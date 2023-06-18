import { Metadata } from "next";
import Image from "next/image";
import NavBar from '../../components/navbar';


export const metadata: Metadata = {
  title: "Abdur Rafay",
};

export default function Page() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col mx-auto py-16 px-4 w-full max-w-prose justify-center items-left">
        <p className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-amber to-tomato py-2">
          Projects
        </p>
      </div>
      <div className="filldiv">
        <Image src={""} alt={""}></Image>
      </div>
    </>
  );
}
