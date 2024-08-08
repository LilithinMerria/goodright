import { countersDeutsch } from "@/app/lib/achievement-data";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Achievement() {
  return (
    <div className="e141-5 x-section mx-auto lg:w-[1200px] px-4 py-8">
      <div className="e141-6 x-container">
        <div className="e141-7 x-column flex flex-col sm:flex-row justify-between">
          {countersDeutsch.map(({ icon, endNumber, label }, index) => (
            <div
              key={index}
              className={`e141-${
                index + 7
              } x-column flex flex-col items-center text-center w-full sm:w-1/4 mb-8 sm:mb-0`}
            >
              {icon}
              <div
                className={`e141-${index + 9} x-counter mt-4`}
                data-x-element="counter"
                data-x-params={`{"numStart":"0","numEnd":"${endNumber}","numSpeed":"1.5s","selector":".x-counter-number"}`}
              >
                <div className="x-counter-number-wrap flex justify-center items-center">
                  <span className="x-counter-number text-4xl font-bold">
                    {endNumber}
                  </span>
                  <span className="x-counter-number-suffix text-4xl font-bold">
                    +
                  </span>
                </div>
                <div className="x-counter-after text-lg uppercase mt-2">
                  {label}
                </div>
              </div>
              {index < countersDeutsch.length - 1 && (
                <hr
                  className={`e141-${index + 10} x-line my-4 border-gray-300`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
