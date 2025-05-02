import { useForm } from 'react-hook-form';
import { AddCarFormDataType } from '~types/types.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { AddCarFormData } from '~types/schemas.ts';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~components/ui/form.tsx';
import { Input } from '~components/ui/input.tsx';
import { Button } from '~components/ui/button.tsx';
import { useSWRConfig } from 'swr';
import { ASYNC_RACE_GARAGE_ENDPOINT, requestConfig } from '~config/endpoints.ts';
import { fetcher } from '~utils/fetcher.ts';

export const AddCarForm = () => {
  const form = useForm<AddCarFormDataType>({
    resolver: zodResolver(AddCarFormData),
    defaultValues: {
      name: '',
      color: '#d9458c',
      id: '',
    },
  });

  const { mutate } = useSWRConfig();

  const onSubmit = async (data: AddCarFormDataType) => {
    try {
      await fetcher(
        ASYNC_RACE_GARAGE_ENDPOINT,
        requestConfig.post({
          name: data.name,
          color: data.color,
        }),
      );
      await mutate(ASYNC_RACE_GARAGE_ENDPOINT);
      form.reset();
    } catch (error) {
      console.error('Failed to add car:', error);
    }
  };

  return (
    <Form {...form}>
      <form className={'p-4 flex flex-row gap-3 justify-center'} onSubmit={form.handleSubmit(onSubmit)}>
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
        <Button type={'submit'}>Add Car</Button>
      </form>
    </Form>
  );
};
