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
    <Container className="flex gap-4">
      <Carousel
        className="w-[70%] rounded-2xl overflow-hidden"
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
      <div className="flex-1 flex flex-col gap-4">
        <div className="w-full rounded-2xl overflow-hidden">
          <AspectRatio ratio={16 / 9}>
            <Image src="/ramazan.jpg" fill alt="Valorant" />
          </AspectRatio>
        </div>
        <div className="w-full rounded-2xl overflow-hidden">
          <AspectRatio ratio={16 / 9}>
            <Image src="/rise.jpg" fill alt="Valorant" />
          </AspectRatio>
        </div>
        <div className="flex-1 flex items-center justify-center bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 rounded-2xl overflow-hidden">
          <p className="text-2xl font-bold">INDIRIM KUPONU: RAMADAN10</p>
        </div>
      </div>
    </Container>
  );
};

export default AdsBox;
