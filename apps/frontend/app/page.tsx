import { Sign } from "crypto";
import { Features } from "./components/Features";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SignupSection } from "./components/SignupSection";
import { SignUp } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="">
      <Hero/> 
      <Features/>
      <SignupSection/>
      <SignUp/>
    </div>

  );
}
