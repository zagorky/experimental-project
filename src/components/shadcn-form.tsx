import { useForm } from 'react-hook-form';
import { UserFormDataType } from '~types/types.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserFormData } from '~types/schemas.ts';
import { useUsersStore } from '~stores/users-store.ts';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~components/ui/form.tsx';
import { Input } from '~components/ui/input.tsx';
import { Button } from '~components/ui/button.tsx';

export const ShadcnForm = () => {
  const addUser = useUsersStore((state) => state.addUser);

  const form = useForm<UserFormDataType>({
    resolver: zodResolver(UserFormData),
    defaultValues: {
      name: '',
      email: '',
      id: '',
    },
  });

  const onSubmit = (data: UserFormDataType): void => {
    console.log(data);
    addUser(data);
    form.reset();
  };

  console.log('Shadcn form render');

  return (
    <>
      <h2 className={'font-bold text-pink-700 text-2xl'}>Shadcn Form</h2>
      <Form {...form}>
        <form className={'p-4'} onSubmit={(e) => void form.handleSubmit(onSubmit)(e)}>
          <FormField
            name={'name'}
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            name={'email'}
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <Button type={'submit'}>Submit</Button>
        </form>
      </Form>
    </>
  );
};
