import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

const Card = () => {
  return (
    <div className="relative flex items-end w-1/5 h-[400px] rounded-lg overflow-hidden hover:scale-110 transition-all duration-300">
      <Image
        src={'/vp.jpg'}
        className="absolute top-0 left-0 -z-10"
        fill
        alt="Valorant"
      />
      <div className="bg-black/60 w-full flex flex-col gap-2 items-center py-3">
        <p className="text-lg font-bold">Valorant Point</p>
        <Link href={'/'}>
          <Button className="bg-brand font-bold">Satın Al</Button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
