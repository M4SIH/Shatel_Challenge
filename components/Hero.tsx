import React from "react";
import Container from "./Container";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <div className="flex">
              <div className="flex items-center justify-evenly w-40">
                <Image
                  src={"/icons/star.svg"}
                  alt="svg"
                  width={20}
                  height={20}
                />
                <Image
                  src={"/icons/star.svg"}
                  alt="svg"
                  width={20}
                  height={20}
                />
                <Image
                  src={"/icons/star.svg"}
                  alt="svg"
                  width={20}
                  height={20}
                />
                <Image
                  src={"/icons/star.svg"}
                  alt="svg"
                  width={20}
                  height={20}
                />
                <Image
                  src={"/icons/star.svg"}
                  alt="svg"
                  width={20}
                  height={20}
                />
              </div>
              <span className="flex ml-2 text-nowrap text-gray-800 ">
                Rated 4.8/5 (243 reviews)
              </span>
            </div>
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight ">
              Create you portfolio in minutes.
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-400 lg:text-xl xl:text-2xl">
              With Fiber, you can setup your own personal portfolio in minutes
              with dozens of premade, beautiful templates.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-5 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="/#"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
              >
                Start Free Trial
              </a>
              <a
                href="/#"
                target="_blank"
                rel="noopener"
                className=" text-indigo-600 font-bold  border-b-indigo-600 border-b-2"
              >
                <span> View Examples</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={"/images/hero-Illustration.png"}
              width={616}
              height={617}
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center"></div>
      </Container>
    </>
  );
}
