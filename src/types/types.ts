import { Signal } from '@preact/signals-react';

export interface FormDataType {
  name: string;
  email: string;
}

export interface SignalFormDataType {
  signal: Signal<FormDataType>;
}
