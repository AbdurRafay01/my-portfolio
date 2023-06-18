import { Metadata } from "next";
import NavBar from "../components/navbar";
import { roboto_mono, tilt_prism } from "./fonts";

export const metadata: Metadata = {
  title: "Abdur Rafay",
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Page() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col mx-auto py-16 px-4 w-full max-w-prose justify-center items-left">
        <p className="font-sans text-2xl text-cornsilk">
          Hi there,
        </p>
        {/*  + "text-transparent text-5xl bg-clip-text bg-gradient-to-r from-amber to-tomato py-2 */}
        <p className={classNames(roboto_mono.className, "text-transparent text-5xl bg-clip-text bg-gradient-to-r from-amber to-tomato py-2")}>
          I&apos;m Abdur Rafay
        </p>
        <p className="font-sans text-cornsilk text-xl text-white">
        I&apos;m a Software Engineer building web applications with NextJS, Node.js, TypeScript, Flask, Django-REST, and PostgreSQL. I like to hang out in Discord communities to converse with other developers.
        </p>
        {/* <TypewriterComponent /> */}
      </div>
    </>
  );
}
