import { CarType } from '~types/types.ts';
import { CarSvg } from '~components/car-svg.tsx';

export const Car = (carData: CarType) => {
  const { name, id, color } = carData;
  return (
    <div id={id.toString()}>
      <div className={'flex gap-2'}>
        <button
          className={'cursor-pointer'}
          type="button"
          onClick={() => {
            console.log('delete');
          }}
        >
          ✖️
        </button>
        <button
          className={'cursor-pointer'}
          type="button"
          onClick={() => {
            console.log('edit');
          }}
        >
          ✏️
        </button>
        <h3>{name}</h3>
      </div>
      <CarSvg color={color} />
    </div>
  );
};
