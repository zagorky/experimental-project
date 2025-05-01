import { useSignal } from '@preact/signals-react';
import { useSignals } from '@preact/signals-react/runtime';
import { SignalFormDataType } from '~types/types.ts';
import styles from '~components/styles.module.css';

export function SignalForm() {
  const name = useSignal('');
  const email = useSignal('');

  const formValues = useSignal({
    email: email.value,
    name: name.value,
  });

  console.log('Signal form render');

  return (
    <>
      <h2 className={styles.h2}>Signal Form</h2>
      <form
        className={styles.form}
        onSubmit={(event) => {
          event.preventDefault();
          formValues.value = { name: name.value, email: email.value };
        }}
      >
        <label htmlFor={'name'}>
          Your Name
          <input
            className={styles.input}
            id={'name'}
            type={'text'}
            onChange={(event) => {
              name.value = event.target.value;
            }}
          />
        </label>
        <label className={styles.label} htmlFor={'email'}>
          Email Address
          <input
            className={styles.input}
            id={'email'}
            type={'email'}
            onChange={(event) => {
              email.value = event.target.value;
            }}
          />
        </label>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
      <CurrentValue signal={formValues} />
    </>
  );
}

function CurrentValue({ signal }: SignalFormDataType) {
  useSignals();
  return (
    <p className={styles.p}>
      Текущее значение:{' '}
      <span className={styles.span}>
        {signal.value.name} {signal.value.email}
      </span>
    </p>
  );
}
