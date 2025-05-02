import { useForm } from 'react-hook-form';
import { AddCarFormDataType } from '~types/types.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { AddCarFormData } from '~types/schemas.ts';
import { useSWRConfig } from 'swr';
import { fetcher } from '~utils/fetcher.ts';
import { ASYNC_RACE_GARAGE_ENDPOINT } from '~config/endpoints.ts';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~components/ui/form.tsx';
import { Input } from '~components/ui/input.tsx';
import { Button } from '~components/ui/button.tsx';
import { requestConfig } from '~config/request-config.ts';

interface CarFormType {
  method: 'post' | 'patch' | 'put';
  purpose: string;
  id?: number;
  onSuccess?: () => void;
}

export const CarForm = (props: CarFormType) => {
  const { method, purpose, id, onSuccess } = props;

  const form = useForm<AddCarFormDataType>({
    resolver: zodResolver(AddCarFormData),
    defaultValues: {
      name: '',
      color: '#d9458c',
    },
  });

  const { mutate: revalidate } = useSWRConfig();

  const onSubmit = (data: AddCarFormDataType) => {
    void fetcher(
      id ? ASYNC_RACE_GARAGE_ENDPOINT + `/${id.toString()}` : ASYNC_RACE_GARAGE_ENDPOINT,
      requestConfig[method]({
        name: data.name,
        color: data.color,
      }),
    )
      .then(() => {
        void revalidate(ASYNC_RACE_GARAGE_ENDPOINT);
        form.reset();
        onSuccess?.();
      })
      .catch((e: unknown) => {
        if (e instanceof Error) {
          console.error('Failed to:', purpose, e.message);
        } else {
          console.error('Failed to:', purpose, e);
        }
      });
  };

  return (
    <Form {...form}>
      <form className={'p-4 flex flex-row gap-3 justify-center'} onSubmit={(e) => void form.handleSubmit(onSubmit)(e)}>
        <FormField
          name={'name'}
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className={'sr-only'}>Car Name</FormLabel>
              <FormControl>
                <Input placeholder={'Car Name'} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          name={'color'}
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className={'sr-only'}>Car Color</FormLabel>
              <FormControl>
                <Input className={'w-12'} type={'color'} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <Button type={'submit'}>{purpose}</Button>
      </form>
    </Form>
  );
};
