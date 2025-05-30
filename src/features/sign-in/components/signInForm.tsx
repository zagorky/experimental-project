import type { LoginFormFieldValues } from '~features/sign-in/types/types';
import type { ComponentProps } from 'react';
import type { SubmitHandler } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~components/ui/card';

import { loginSchema } from '~features/sign-in/types/schemas';
import { cn } from '~lib/utils';
import { withDataTestId } from '~utils/helpers';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import { routes } from '~config/routes-config.ts';
import { Form } from '~components/ui/form.tsx';
import { EmailField } from '~features/sign-up/components/form-fields/emailField.tsx';
import { PasswordField } from '~features/sign-up/components/form-fields/passwordField.tsx';
import { Button } from '~components/ui/button.tsx';

export const SignInForm = ({ className, ...props }: ComponentProps<'div'>) => {
  const form = useForm<LoginFormFieldValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const handleSubmit: SubmitHandler<LoginFormFieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>Enter your email below to sign in to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={(event) => void form.handleSubmit(handleSubmit)(event)} className="space-y-8">
              <div className="flex flex-col gap-6">
                <EmailField />
                <PasswordField />
                <Button type="submit" className="w-full">
                  Submit
                </Button>

                <div className="mt-4 text-center text-sm">
                  Don&apos;t have an account?{' '}
                  <Link
                    to={routes.signup.path}
                    className="underline underline-offset-4"
                    {...withDataTestId('redirection-link')}
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};
