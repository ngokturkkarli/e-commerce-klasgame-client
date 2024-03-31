import Container from '@/components/Container';
import AdsBox from '@/components/AdsBox/AdsBox';
import MostSaled from '@/components/MostSaled/MostSaled';
import StreamersBox from '@/components/StreamersBox/StreamersBox';
import InfoBox from '@/components/InfoBox/InfoBox';

export default function Home() {
  return (
    <main className="flex flex-col gap-8 items-center">
      <AdsBox />
      <MostSaled />
      <StreamersBox />
      <InfoBox />
    </main>
  );
}
