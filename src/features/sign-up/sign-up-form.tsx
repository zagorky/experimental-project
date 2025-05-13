import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~components/ui/card.tsx';
import { Button } from '~components/ui/button.tsx';
import { Form } from '~components/ui/form.tsx';
import { useForm } from 'react-hook-form';
import type { LoginFormFieldValues } from '~features/sign-in/types/types.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '~features/sign-in/types/schemas.ts';
import { EmailField } from '~features/sign-up/components/form-fields/emailField.tsx';
import { PasswordField } from '~features/sign-up/components/form-fields/passwordField.tsx';
import { NameField } from '~features/sign-up/components/form-fields/name-field.tsx';
import { AddressField } from '~features/sign-up/components/form-fields/address-field.tsx';

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
    <Card className="m-auto mt-10 w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>Enter your email below to login to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form>
            <div className="flex flex-col  gap-4 ">
              <div className="flex flex-col md:flex-row justify-center gap-2">
                <div className="grid gap-2 w-full">
                  <EmailField />
                </div>
                <div className="grid gap-2 w-full">
                  <PasswordField />
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-center gap-2">
                <div className="grid gap-2 w-full">
                  <NameField />
                </div>
                <div className="grid gap-2 w-full">
                  <NameField name="last-name" placeholder="Doe" label={'Last Name'} />
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-center gap-2">
                <div className="grid gap-2 w-full">
                  <AddressField />
                </div>
                <div className="grid gap-2 w-full">
                  <AddressField name="billing-address" label={'Billing Address'} />
                </div>
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
