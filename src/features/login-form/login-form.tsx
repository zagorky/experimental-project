import type { LoginFormType } from '~features/login-form/types/types.ts';
import type { Control } from 'react-hook-form';

import { Button } from '~components/ui/button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '~components/ui/form';
import { Input } from '~components/ui/input';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

export const PasswordField = ({ control }: { control: Control<LoginFormType> }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormField
      control={control}
      name="password"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Password</FormLabel>
          <div className="relative">
            <Input placeholder="password" {...field} type={showPassword ? 'text' : 'password'} />
            <Button
              type="button"
              size="icon"
              className="absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const EmailField = ({ control }: { control: Control<LoginFormType> }) => {
  return (
    <FormField
      control={control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input placeholder="example@example.com" {...field} type="text" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormDescription } from '~components/ui/form';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import { loginSchema } from '~features/login-form/types/types.ts';

export const LoginForm = () => {
  const form = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleSubmit = () => {
    console.error('login form submit', form);
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={(event) => void form.handleSubmit(handleSubmit)(event)} className="space-y-8">
        <FormDescription>Enter your email and password to login.</FormDescription>
        <EmailField control={form.control} />
        <PasswordField control={form.control} />
        <Button type="submit">Login</Button>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?
          <Link to="/signup" className="underline underline-offset-4">
            Sign up
          </Link>
        </div>
      </form>
    </Form>
  );
};
