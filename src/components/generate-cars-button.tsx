import { Button } from '~components/ui/button.tsx';

export const GenerateCarsButton = () => {
  const handleOnClick = () => {
    const cars = generateRandomCars();
    console.log(cars);
  };

  return <Button onClick={handleOnClick}>Generate Cars</Button>;
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
  const randomInRange = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

  const toHex = (num: number) => num.toString(16).padStart(2, '0');

  const r = randomInRange(100, 255);
  const g = randomInRange(100, 255);
  const b = randomInRange(100, 255);

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
