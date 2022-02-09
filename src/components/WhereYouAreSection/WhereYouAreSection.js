/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ReviewedMan from "../../Images/avatar-testimonial.jpg";
import QuotaImg from "../../Images/icon-quotes.svg";
import ManagingImg from "../../Images/illustration-2.svg";
import "./WhereYouAreSection.css";

const WhereYouAreSection = () => {
  return (
    <div>
      <div className="whereYouAreSection h-auto py-14 md:mt-20">
        <div className="sm:px-10 px-5">
          <div className="flex flex-col lg:flex-row items-center justify-evenly">
            <div className="text-area order-1 space-y-5 md:space-y-4 py-10">
              <h1 className="first-heading text-2xl sm:text-4xl font-bold leading-10 sm:leading-relaxed">
                Stay productive, wherever you are
              </h1>
              <p className="first-heading-child sm:leading-loose how text-md sm:text-lg">
                Never let location be an issue when accessing your files. Fylo
                has you covered for all of your file storage needs.
              </p>
              <p className="first-heading-child sm:leading-loose how text-md sm:text-lg">
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments require!
              </p>

              <div className="review-section py-5">
                <a
                  className="text-green-500 underline hover:text-green-600 duration-500"
                  href="#"
                >
                  See how Fylo works{" "}
                  <i className="fas fa-arrow-right text-white bg-green-500 px-1 pt-1 rounded-full mx-1 text-sm"></i>
                </a>
                {/* =====Review Box===== */}
                <div className="review-box shadow-2xl px-5 py-5 my-8 lg:w-3/4 rounded-lg">
                  <img
                    className="pt-2 w-2/12 md:w-2/12 opacity-20"
                    src={QuotaImg}
                    alt="quota"
                  />
                  <p className="py-4 md:py-8 md:leading-loose leading-relaxed italic">
                    Fylo has improved out team productivity by an order og
                    magnitude, Since making the switch out team has become a
                    well-olled collaboration machine.
                  </p>
                  <div className="reviewed-man flex space-x-4 items-center">
                    <img
                      className="rounded-full w-1/6 sm:w-14"
                      src={ReviewedMan}
                      alt="Reviewed Man"
                    />
                    <div>
                      <h4 className="font-bold">Kyle Burton</h4>
                      <p className="text-sm">Founder & CEO, Muddle</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* =====Image Area===== */}
            <div className="image-area lg:order-1 w-3/4 md:w-full lg:w-3/4">
              <img src={ManagingImg} alt="StartUp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhereYouAreSection;
