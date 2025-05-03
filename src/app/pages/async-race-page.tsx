import useSWR from 'swr';
import { CarType } from '~types/types.ts';
import { ASYNC_RACE_GARAGE_ENDPOINT } from '~config/endpoints.ts';
import { fetcher } from '~utils/fetcher.ts';
import { Loader } from '~components/ui/loader.tsx';
import { Car } from '~components/car.tsx';
import { ZodError } from 'zod';
import { GenerateCarsButton } from '~components/generate-cars-button.tsx';
import { CarForm } from '~components/car-form.tsx';

export const AsyncRacePage = () => {
  const { data, error, isLoading } = useSWR<CarType[], ZodError>(ASYNC_RACE_GARAGE_ENDPOINT, fetcher);
  console.log('AsyncRacePage render');
  return (
    <div>
      <h2 className={'font-bold text-pink-700 text-2xl'}>Garage</h2>
      {isLoading && <Loader />}
      {error ? (
        <h3>Error</h3>
      ) : (
        <>
          <CarForm method={'post'} purpose={'Add Car'} />
          <GenerateCarsButton />
        </>
      )}
      {!data ? (
        <div>Nothing to render</div>
      ) : (
        <ul>
          {data.map((car) => {
            return <Car key={car.id} {...car} />;
          })}
        </ul>
      )}
    </div>
  );
};
