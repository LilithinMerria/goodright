"use client";
import { carouselItems } from "@/app/lib/carousel-data";
import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class GoodrightCarousel extends Component {
  render(): React.ReactNode {
    return (
      <Carousel
        autoPlay
        interval={5000}
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        className="overflow-hidden"
      >
        {carouselItems.map((item, idx) => (
          <div key={idx} className="relative bg-blue-500 h-screen flex">
            <div className="text-white text-2xl font-bold mt-4 md:w-2/3 mx-auto leading-10 p-8">
              {item.text}
            </div>
          </div>
        ))}
      </Carousel>
    );
  }
}

export default GoodrightCarousel;
