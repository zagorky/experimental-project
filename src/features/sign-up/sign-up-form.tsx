import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~components/ui/card.tsx';
import { Input } from '~components/ui/input.tsx';
import { Button } from '~components/ui/button.tsx';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~components/ui/form.tsx';
import { useForm } from 'react-hook-form';
import type { LoginFormFieldValues } from '~features/sign-in/types/types.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '~features/sign-in/types/schemas.ts';

export const SignUpForm = () => {
  const form = useForm<LoginFormFieldValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  return (
    <Card className="m-auto mt-10 w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>Enter your email below to login to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form>
            <div className="flex flex-col gap-6 ">
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center">
                        <FormLabel>Email</FormLabel>
                      </div>
                      <FormControl>
                        <Input {...field} id="email" type="email" placeholder="m@example.com" />
                      </FormControl>
                      <div className={'h-6 w-[325px]'}>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center">
                        <FormLabel>Password</FormLabel>
                      </div>
                      <FormControl>
                        <Input {...field} id="password" type="password" />
                      </FormControl>
                      <div className={'h-6 w-[325px]'}>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </CardFooter>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
