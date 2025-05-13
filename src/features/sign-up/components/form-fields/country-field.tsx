import { Input } from '~components/ui/input';
import { withDataTestId } from '~utils/helpers';
import { useFormContext } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '~components/ui/form.tsx';

interface CountryFieldProps {
  name?: string;
  label?: string;
  placeholder?: string;
}

export const CountryField = ({ name = 'country', label = 'Country', placeholder = '' }: CountryFieldProps) => {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="grid gap-3">
            <FormLabel className={'text-left'}>{label}</FormLabel>
            <FormControl>
              <Input
                placeholder={placeholder}
                autoComplete=""
                {...field}
                type="text"
                {...withDataTestId(`${name}-input`)}
              />
            </FormControl>
            <div className={'h-6 w-[325px]'}>
              <FormMessage />
            </div>
          </div>
        </FormItem>
      )}
    />
  );
};
