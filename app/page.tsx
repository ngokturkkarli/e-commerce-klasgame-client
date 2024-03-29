import Container from '@/components/Container';
import AdsBox from '@/components/AdsBox/AdsBox';
import MostSaled from '@/components/MostSaled/MostSaled';
import StreamersBox from '@/components/StreamersBox/StreamersBox';
import InfoBox from '@/components/InfoBox/InfoBox';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-6 items-center pb-36">
      <AdsBox />
      <MostSaled />
      <StreamersBox />
      <InfoBox />
    </main>
  );
}
