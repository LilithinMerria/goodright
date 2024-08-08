import "@fortawesome/fontawesome-free/css/all.min.css";
import { LiaLifeRing } from "react-icons/lia";
import { FiUsers } from "react-icons/fi";
import { TbBooks } from "react-icons/tb";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { achievementsDeutsch } from "@/app/lib/achievement-data";

export default function Achievement() {
  return (
    <div className="e141-5 x-section mx-auto md:w-[1200px] px-4 py-8">
      <div className="e141-6 x-container">
        <div className="e141-7 x-column flex flex-col sm:flex-row justify-between">
          <div className="e141-7 x-column flex flex-col items-center text-center w-full sm:w-1/4 mb-8 sm:mb-0">
            {/* <i
                            className="x-icon x-icon-l-life-ring text-black text-3xl"
                            aria-label="Life Ring Icon"
                            aria-hidden="true"
                        /> */}
            <LiaLifeRing className="text-6xl" />
            <div
              className="e141-9 x-counter mt-4"
              data-x-element="counter"
              data-x-params='{"numStart":"0","numEnd":"650000","numSpeed":"1.5s","selector":".x-counter-number"}'
            >
              <div className="x-counter-number-wrap">
                <span className="x-counter-number text-2xl">650000</span>
                <span className="x-counter-number-suffix text-xl">+</span>
              </div>
              <div className="x-counter-after text-lg uppercase">
                {achievementsDeutsch[0].legalSolved}
              </div>
            </div>
            <hr className="e141-10 x-line my-4 border-gray-300" />
          </div>

          <div className="e141-11 x-column flex flex-col items-center text-center w-full sm:w-1/4 mb-8 sm:mb-0">
            {/* <i
                            className="x-icon x-icon-l-user-friends text-black text-3xl"
                            aria-label="User Friends Icon"
                            aria-hidden="true"
                        /> */}
            <FiUsers className="text-6xl" />
            <div
              className="e141-13 x-counter mt-4"
              data-x-element="counter"
              data-x-params='{"numStart":"0","numEnd":"500000","numSpeed":"1.5s","selector":".x-counter-number"}'
            >
              <div className="x-counter-number-wrap">
                <span className="x-counter-number text-2xl">500000</span>
                <span className="x-counter-number-suffix text-xl">+</span>
              </div>
              <div className="x-counter-after text-lg uppercase">
                {achievementsDeutsch[0].users}
              </div>
            </div>
            <hr className="e141-14 x-line my-4 border-gray-300" />
          </div>

          <div className="e141-15 x-column flex flex-col items-center text-center w-full sm:w-1/4 mb-8 sm:mb-0">
            {/* <i
                            className="x-icon x-icon-l-books text-black text-3xl"
                            aria-label="Books Icon"
                            aria-hidden="true"
                        /> */}
            <TbBooks className="text-6xl" />
            <div
              className="e141-17 x-counter mt-4"
              data-x-element="counter"
              data-x-params='{"numStart":"0","numEnd":"60","numSpeed":"1.5s","selector":".x-counter-number"}'
            >
              <div className="x-counter-number-wrap">
                <span className="x-counter-number text-2xl">60</span>
                <span className="x-counter-number-suffix text-xl">+</span>
              </div>
              <div className="x-counter-after text-lg uppercase">
                {achievementsDeutsch[0].areasLaw}
              </div>
            </div>
            <hr className="e141-18 x-line my-4 border-gray-300" />
          </div>

          <div className="e141-19 x-column flex flex-col items-center text-center w-full sm:w-1/4">
            {/* <i
                            className="x-icon x-icon-l-balance-scale text-black text-3xl"
                            aria-label="Balance Scale Icon"
                            aria-hidden="true"
                        /> */}
            <LiaBalanceScaleSolid className="text-6xl" />
            <div
              className="e141-21 x-counter mt-4"
              data-x-element="counter"
              data-x-params='{"numStart":"0","numEnd":"600","numSpeed":"1.5s","selector":".x-counter-number"}'
            >
              <div className="x-counter-number-wrap">
                <span className="x-counter-number text-2xl">600</span>
                <span className="x-counter-number-suffix text-xl">+</span>
              </div>
              <div className="x-counter-after text-lg uppercase">
                {achievementsDeutsch[0].lawyers}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
