'use client';

import React from 'react';
import Container from '../Container';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const FAKE_DATA = [
  {
    name: 'Valorant',
    image: 'valorant.jpg',
  },
  {
    name: 'Valorant',
    image: 'valorant.jpg',
  },
  {
    name: 'Valorant',
    image: 'valorant.jpg',
  },
];

const AdsBox = () => {
  return (
    <Container className="flex flex-col lg:flex-row gap-4">
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
        <div className="w-full">
          <AspectRatio ratio={16 / 9}>
            <Image src="/rise.jpg" fill alt="Valorant" />
          </AspectRatio>
        </div>
        <div className="w-full">
          <AspectRatio ratio={16 / 9}>
            <Image src="/valorant.jpg" fill alt="Valorant" />
          </AspectRatio>
        </div>
      </Carousel>
      <div className="lg:flex-1 grid grid-cols-2 lg:flex lg:flex-col lg:justify-around gap-4 lg:gap-0">
        <div className="w-full rounded-2xl overflow-hidden lg:hover:scale-110 transition-all duration-300 cursor-pointer">
          <AspectRatio ratio={16 / 9}>
            <Image src="/ramazan.jpg" fill alt="Valorant" />
          </AspectRatio>
        </div>
        <div className="w-full rounded-2xl overflow-hidden lg:hover:scale-110 transition-all duration-300 cursor-pointer">
          <AspectRatio ratio={16 / 9}>
            <Image src="/rise.jpg" fill alt="Valorant" />
          </AspectRatio>
        </div>
      </div>
    </Container>
  );
};

export default AdsBox;
