import { AddCarFormDataType, CarType } from '~types/types.ts';
import { CarSvg } from '~components/car-svg.tsx';
import { useSWRConfig } from 'swr';
import { fetcher } from '~utils/fetcher.ts';
import { ASYNC_RACE_GARAGE_ENDPOINT, requestConfig } from '~config/endpoints.ts';

export const Car = (carData: CarType) => {
  const { name, id, color } = carData;
  const { mutate } = useSWRConfig();

  const onDelete = async (id: number) => {
    try {
      await fetcher(ASYNC_RACE_GARAGE_ENDPOINT + `/${id.toString()}`, requestConfig.delete);
      await mutate(ASYNC_RACE_GARAGE_ENDPOINT);
    } catch (error) {
      console.error('Failed to delete car:', error);
    }
  };

  const onEdit = async (data: AddCarFormDataType) => {
    try {
      await fetcher(
        ASYNC_RACE_GARAGE_ENDPOINT + `/${data.id}`,
        requestConfig.patch({
          name: data.name,
          color: data.color,
        }),
      );
      await mutate(ASYNC_RACE_GARAGE_ENDPOINT);
    } catch (error) {
      console.error('Failed to update car:', error);
    }
  };

  return (
    <li id={id.toString()}>
      <div className={'flex gap-2'}>
        <button
          className={'cursor-pointer'}
          type="button"
          onClick={() => {
            onDelete(id);
          }}
        >
          ✖️
        </button>
        <button
          className={'cursor-pointer'}
          type="button"
          onClick={() => {
            onEdit({ name, color, id });
          }}
        >
          ✏️
        </button>
        <h3>{name}</h3>
      </div>
      <CarSvg color={color} />
    </li>
  );
};
