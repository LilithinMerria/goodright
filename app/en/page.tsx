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
      <div className="bg-blue-100 py-11">
        <Achievements />
      </div>
      <LegalTech />
      <Hiring />
      <div className="bg-blue-100 py-11">
        <Imprint />
      </div>
    </div>
  );
}
