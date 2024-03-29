import Container from '@/components/Container';
import AdsBox from '@/components/AdsBox/AdsBox';
import MostSaled from '@/components/MostSaled/MostSaled';
import StreamersBox from '@/components/StreamersBox/StreamersBox';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-4 items-center pb-36">
      <AdsBox />
      <MostSaled />
      <StreamersBox />
    </main>
  );
}
