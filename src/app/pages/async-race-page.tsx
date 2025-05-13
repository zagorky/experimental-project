import useSWR from 'swr';
import { CarType } from '~types/types.ts';
import { ASYNC_RACE_GARAGE_ENDPOINT } from '~config/endpoints.ts';
import { fetcher } from '~utils/fetcher.ts';
import { Car } from '~components/car.tsx';
import { ZodError } from 'zod';
import { GenerateCarsButton } from '~components/generate-cars-button.tsx';
import { CarForm } from '~components/car-form.tsx';
import { AsyncRaceSkeleton } from '~components/async-race-skeleton.tsx';

const AsyncRacePage = () => {
  const { data, error, isLoading } = useSWR<CarType[], ZodError>(ASYNC_RACE_GARAGE_ENDPOINT, fetcher);
  console.log('AsyncRacePage render');
  return (
    <div>
      <h2 className={'font-bold text-pink-700 text-2xl'}>Garage</h2>
      {isLoading && <AsyncRaceSkeleton />}

      {!isLoading && (
        <>
          {error ? (
            <h3>{error.message}</h3>
          ) : (
            <>
              <CarForm method={'post'} purpose={'Add Car'} />
              <GenerateCarsButton />

              {data ? (
                <ul>
                  {data.map((car) => (
                    <Car key={car.id} {...car} />
                  ))}
                </ul>
              ) : (
                <div>Nothing to render</div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default AsyncRacePage;
