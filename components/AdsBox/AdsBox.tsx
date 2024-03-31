import Container from '../Container';
import SideImages from './SideImages';
import CarouselBox from './CarouselBox';

const FAKE_DATA = [
  { info: 'Ramazan', image: '/ramazan.jpg' },
  { info: 'Rise', image: '/rise.jpg' },
];

const AdsBox = async () => {
  return (
    <Container className="flex flex-col lg:flex-row gap-4">
      <CarouselBox data={FAKE_DATA} />
      <SideImages />
    </Container>
  );
};

export default AdsBox;
