import Container from '../Container';
import { Button } from '../ui/button';
import StreamerBox from './StreamerBox';

const STREAMERS = [
  {
    name: 'elraenn',
    logo: 'elraenn.png',
  },
  {
    name: 'wtcn',
    logo: 'wtcn.png',
  },
  {
    name: 'levo',
    logo: 'levo.png',
  },
  {
    name: 'rraenee',
    logo: 'rraenee.png',
  },
  {
    name: 'mithrain',
    logo: 'mithrain.png',
  },
  {
    name: 'combatry',
    logo: 'combatry.png',
  },
];

const StreamersBox = () => {
  return (
    <div className="hidden lg:flex w-full justify-center items-center">
      <Container className="flex flex-col gap-2">
        <div className="flex items-center rounded-lg bg-stone-900 h-12 px-4">
          <p className="text-xl font-bold tracking-widest">Yayıncılar</p>
        </div>
        <div className="bg-stone-900 p-4 grid grid-cols-6 gap-4">
          {STREAMERS.map((streamer, index) => (
            <StreamerBox key={index} streamer={streamer} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default StreamersBox;
