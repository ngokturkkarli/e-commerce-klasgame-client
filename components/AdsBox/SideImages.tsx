'use client';
import { AspectRatio } from '../ui/aspect-ratio';
import Image from 'next/image';

const SideImages = () => {
  return (
    <div className="lg:flex-1 grid grid-cols-2 lg:flex lg:flex-col lg:justify-around gap-4 lg:gap-0">
      <div className="w-full rounded-2xl overflow-hidden lg:hover:scale-110 transition-all duration-300 cursor-pointer">
        <AspectRatio ratio={16 / 9}>
          <Image src="/ramazan.jpg" fill alt="Ramazan" />
        </AspectRatio>
      </div>
      <div className="w-full rounded-2xl overflow-hidden lg:hover:scale-110 transition-all duration-300 cursor-pointer">
        <AspectRatio ratio={16 / 9}>
          <Image src="/rise.jpg" fill alt="Rise" />
        </AspectRatio>
      </div>
    </div>
  );
};

export default SideImages;
