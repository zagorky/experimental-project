import { useForm } from 'react-hook-form';
import { AddCarFormDataType } from '~types/types.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { AddCarFormData } from '~types/schemas.ts';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~components/ui/form.tsx';
import { Input } from '~components/ui/input.tsx';
import { Button } from '~components/ui/button.tsx';

export const AddCarForm = () => {
  const form = useForm<AddCarFormDataType>({
    resolver: zodResolver(AddCarFormData),
    defaultValues: {
      name: '',
      color: '',
      id: '',
    },
  });

  const onSubmit = (data: AddCarFormDataType): void => {
    console.log(data);
    form.reset();
  };

  return (
    <Form {...form}>
      <form className={'p-4'} onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name={'name'}
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Car Name</FormLabel>
              <FormControl>
                <Input {...field} />
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
              <FormLabel>Car Color</FormLabel>
              <FormControl>
                <Input type={'color'} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <Button type={'submit'}>Add</Button>
      </form>
    </Form>
  );
};
