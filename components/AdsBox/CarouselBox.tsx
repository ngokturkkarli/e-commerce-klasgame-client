'use client';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { AspectRatio } from '../ui/aspect-ratio';
import Image from 'next/image';
import React from 'react';

type CarouselItem = {
  info: string;
  image: string;
};

const CarouselBox = ({ data }: { data: CarouselItem[] }) => {
  return (
    <Carousel
      className="w-full lg:w-[70%] rounded-2xl overflow-hidden"
      showStatus={false}
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      interval={3000}
      showArrows={false}
      swipeable={true}
      emulateTouch={true}
    >
      {data.map((d) => (
        <CarouselItem item={d} />
      ))}
    </Carousel>
  );
};

const CarouselItem = ({ item }: { item: CarouselItem }) => {
  return (
    <div className="w-full">
      <AspectRatio ratio={16 / 9}>
        <Image src={`${item.image}`} fill alt="Valorant" />
      </AspectRatio>
    </div>
  );
};

export default CarouselBox;
