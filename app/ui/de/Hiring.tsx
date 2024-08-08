import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FaRegLightbulb } from "react-icons/fa";
import { hiringDeutsch } from "../../lib/hiring-data";

export default function Hiring() {
  return (
    <div className="mt-40 text-center mx-auto md:w-[1200px] px-4 py-8">
      {hiringDeutsch.map((job, index) => (
        <div key={index} className="mb-10">
          <h2 className="uppercase text-3xl font-bold">{job.title}</h2>
          <p className="md:my-16 md:w-3/4 md:mx-auto">{job.content}</p>

          <div className="md:flex gap-10 items-center justify-center mt-10">
            <div className="w-auto border border-gray-300 rounded md:w-2/5 h-40 flex items-center justify-center flex-col">
              <HiOutlineComputerDesktop className="text-5xl w-full" />
              <p className="uppercase mt-4">{job.position1}</p>
            </div>
            <div className="w-auto mt-4 md:mt-0 border border-gray-300 rounded md:w-2/5 h-40 flex items-center justify-center flex-col">
              <FaRegLightbulb className="text-5xl w-full" />
              <p className="uppercase mt-4">{job.position2}</p>
            </div>
          </div>
          <div>
            <p className="mt-20">{job.contact}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
