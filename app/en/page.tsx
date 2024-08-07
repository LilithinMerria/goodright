import Achievements from "../ui/en/Achievements";
import ButtonLanguage from "../ui/en/ButtonLanguage";
import GoodrightCarousel from "../ui/en/GoodrightCarousel";
import Hiring from "../ui/en/Hiring";
import Imprint from "../ui/en/Imprint";
import LegalTech from "../ui/en/LegalTech";

export default function HomeEnglish() {
  return (
    <div className="p-0 bg-white text-black">
      <ButtonLanguage />
      <p className="text-sm uppercase font-bold mx-auto w-full text-center text-white bg-blue-500">
        Legaltech innovation <br /> since day one
      </p>
      <GoodrightCarousel />
      <div className="mx-auto md:w-[1200px] px-4 py-8">
        <Achievements />
        <LegalTech />
        <Hiring />
        <Imprint />
      </div>
    </div>
  );
}
