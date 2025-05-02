import { carBrands, carModels } from '~config/data-for-generation.ts';

export function getRandomColor(): string {
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

export function generateRandomCars() {
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
