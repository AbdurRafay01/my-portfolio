import { Metadata } from "next";
import NavBar from "../components/navbar";
import TypewriterComponent from "../components/typewriter";

export const metadata: Metadata = {
  title: "Abdur Rafay",
};

export default function Page() {
  return (
    <>
      <NavBar />
      <div className="flex justify-left items-left bg-rich-black">
        <div className="mx-20 my-20">
          
          <TypewriterComponent />
        </div>
      </div>
      
    </>
  );
}
