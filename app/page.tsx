import Image from "next/image";
import Hiring from "./ui/de/Hiring";
import Imprint from "./ui/de/Imprint";
import ButtonLanguage from "./ui/de/ButtonLanguage";
import LegalTech from "./ui/de/LegalTech";
import Achievement from "./ui/de/Achievements";
import GoodrightCarousel from "./ui/de/GoodrightCarousel";

export default function Home() {
  return (
    <div className="p-0 bg-white text-black">
      <ButtonLanguage />
      <p className="text-sm uppercase font-bold mx-auto w-full text-center text-white bg-blue-500">
        Legaltech innovation <br /> since day one
      </p>
      <GoodrightCarousel />
      <div className="bg-blue-100 py-11">
        <Achievement />
      </div>
      <h1 className="mx-auto w-[1200px] text-center text-4xl font-bold mt-24">
        DAS SIND UNSERE LEGAL TECH SUPERHEROES
      </h1>
      <LegalTech />
      <Hiring />
      <div className="bg-blue-100 py-11">
        <Imprint />
      </div>
    </div>
  );
}
