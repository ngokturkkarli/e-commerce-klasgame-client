import Container from '@/components/Container';
import AdsBox from '@/components/AdsBox/AdsBox';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-4 items-center">
      <AdsBox />
      <Container>selamlar</Container>
    </main>
  );
}
