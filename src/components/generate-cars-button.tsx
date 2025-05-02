import { Button } from '~components/ui/button.tsx';
import { fetcher } from '~utils/fetcher.ts';
import { ASYNC_RACE_GARAGE_ENDPOINT, requestConfig } from '~config/endpoints.ts';
import { useSWRConfig } from 'swr';

export const GenerateCarsButton = () => {
  const { mutate } = useSWRConfig();

  const onClick = async () => {
    const cars = generateRandomCars();
    try {
      await Promise.all(
        cars.map((car) =>
          fetcher(ASYNC_RACE_GARAGE_ENDPOINT, requestConfig.post({ name: car.name, color: car.color })),
        ),
      );
      await mutate(ASYNC_RACE_GARAGE_ENDPOINT);
    } catch (error) {
      console.error('Failed to generate cars:', error);
    }
  };

  return <Button onClick={onClick}>Generate Cars</Button>;
};

const carBrands = [
  'Tesla',
  'Porsche',
  'Ferrari',
  'Lamborghini',
  'Aston Martin',
  'Bugatti',
  'McLaren',
  'Popik',
  'Pagani',
  'Rolls-Royce',
  'Bentley',
  'Maserati',
  'Alfa Romeo',
  'Lexus',
  'Genesis',
];

const carModels = [
  'Roadster 2025',
  '911 GT3 RS',
  'SF90 Stradale',
  'Revuelto V12',
  'Valkyrie',
  'Chiron Super Sport',
  'Sasarik',
  'Jesko Absolut',
  'Huayra R',
  'Phantom VIII',
  'Continental GT Speed',
  'MC20 Cielo',
  '33 Stradale',
  'LFA Nürburgring',
  'G90 Excellence',
];

function getRandomColor(): string {
  const min = 100;
  const max = 255;
  const radix = 16;
  const maxLength = 2;
  const randomInRange = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

  const toHex = (num: number) => num.toString(radix).padStart(maxLength, '0');

  const r = randomInRange(min, max);
  const g = randomInRange(min, max);
  const b = randomInRange(min, max);

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

function generateRandomCars() {
  const numberOfNewCars = 10;
  const cars = [];
  for (let i = 0; i < numberOfNewCars; i += 1) {
    const brand = carBrands[Math.floor(Math.random() * carBrands.length)];
    const model = carModels[Math.floor(Math.random() * carModels.length)];
    cars.push({
      name: `${brand} ${model}`,
      color: getRandomColor(),
    });
  }
  return cars;
}
