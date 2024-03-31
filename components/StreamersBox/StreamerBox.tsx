import Image from 'next/image';
import React from 'react';
import { AspectRatio } from '../ui/aspect-ratio';
import { Button } from '../ui/button';

const StreamerBox = ({ streamer }: { streamer: any }) => {
  return (
    <div className="w-full h-[300px] bg-white/10 rounded-lg flex flex-col gap-4 group">
      <div className="h-3/5 center">
        <div className="w-3/4 group-hover:scale-110 transition-all duration-700 bg-stone-900 rounded-lg overflow-hidden shadow-2xl">
          <AspectRatio ratio={1 / 1}>
            <Image
              src={`/${streamer.logo}`}
              layout="fill"
              alt={`${streamer.name}`}
            />
          </AspectRatio>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 items-center">
        <p className="text-xl font-bold">{streamer.name}</p>
        <Button className="bg-brand font-bold text-lg">İzle</Button>
      </div>
    </div>
  );
};

export default StreamerBox;
