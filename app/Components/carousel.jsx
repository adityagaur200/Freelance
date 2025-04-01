"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const carousel = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Carousel showArrows={true} autoPlay infiniteLoop>
        <div>
          <Image src="/images/slide1.jpg" alt="First slide" width={800} height={500} />
        </div>
        <div>
          <Image src="/images/slide2.jpg" alt="Second slide" width={800} height={500} />
        </div>
        <div>
          <Image src="/images/slide3.jpg" alt="Third slide" width={800} height={500} />
        </div>
      </Carousel>
    </div>
  );
};

export default carousel;
