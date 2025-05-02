import { CarType } from '~types/types.ts';
import { CarSvg } from '~components/car-svg.tsx';
import { useSWRConfig } from 'swr';
import { fetcher } from '~utils/fetcher.ts';
import { ASYNC_RACE_GARAGE_ENDPOINT } from '~config/endpoints.ts';
import { requestConfig } from '~config/request-config.ts';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '~components/ui/dialog.tsx';
import { CarForm } from '~components/car-form.tsx';
import { useState } from 'react';

export const Car = (carData: CarType) => {
  const { name, id, color } = carData;
  const { mutate: revalidate } = useSWRConfig();
  const [isOpen, setIsOpen] = useState(false);

  const onDelete = (id: number) => {
    void fetcher(ASYNC_RACE_GARAGE_ENDPOINT + `/${id.toString()}`, requestConfig.delete)
      .then(() => {
        void revalidate(ASYNC_RACE_GARAGE_ENDPOINT);
      })
      .catch((e: unknown) => {
        if (e instanceof Error) {
          console.error(e.message);
        } else {
          console.error(e);
        }
      });
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
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger
            onClick={() => {
              setIsOpen(true);
            }}
          >
            ✏️
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Edit {name}</DialogTitle>
            <DialogDescription>You can change name or color of this car</DialogDescription>
            <CarForm
              method={'patch'}
              purpose={'Update Car'}
              id={id}
              onSuccess={() => {
                setIsOpen(false);
              }}
            />
          </DialogContent>
        </Dialog>
        <h3>{name}</h3>
      </div>
      <CarSvg color={color} />
    </li>
  );
};
