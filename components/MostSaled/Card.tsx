import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = () => {
  return (
    <div className="relative flex items-end w-1/5 h-[400px] rounded-lg overflow-hidden hover:scale-110 transition-all duration-300">
      <Image
        src={'/vp.jpg'}
        className="absolute top-0 left-0 -z-10"
        fill
        alt="Valorant"
      />
      <div className="bg-black/60 h-20 w-full flex flex-col items-center py-2">
        <p className="text-lg font-bold">Valorant Point</p>
        <Link
          href={'/'}
          className="bg-orange-500 font-bold text-black py-1 px-6 rounded-lg"
        >
          Satın Al
        </Link>
      </div>
    </div>
  );
};

export default Card;
