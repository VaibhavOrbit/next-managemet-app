import { Features } from "./components/Features";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SignupSection } from "./components/SignupSection";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Features/>
      <SignupSection/>
    </div>

  );
}
