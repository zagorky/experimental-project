import { StreetField } from '~features/sign-up/components/form-fields/street-field.tsx';
import { CityField } from '~features/sign-up/components/form-fields/city-field.tsx';
import { FormLabel } from '~components/ui/form.tsx';
import { CountryField } from '~features/sign-up/components/form-fields/country-field.tsx';
import { PostalCodeField } from '~features/sign-up/components/form-fields/post-code-field.tsx';

interface AddressFieldProps {
  name?: string;
  label?: string;
  placeholder?: string;
}

export const AddressField = ({ label = 'Shipping Address' }: AddressFieldProps) => {
  return (
    <>
      <FormLabel>{label}</FormLabel>
      <CountryField />
      <StreetField />
      <CityField />
      <PostalCodeField />
    </>
  );
};
