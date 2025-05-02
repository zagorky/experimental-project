import { Button } from '~components/ui/button.tsx';
import { fetcher } from '~utils/fetcher.ts';
import { ASYNC_RACE_GARAGE_ENDPOINT } from '~config/endpoints.ts';
import { useSWRConfig } from 'swr';
import { generateRandomCars } from '~utils/random.ts';
import { requestConfig } from '~config/request-config.ts';

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

  return <Button onClick={() => void onClick()}>Generate Cars</Button>;
};
