import { useState } from 'react';
import { validateSubmit } from '~utils/validation.ts';
import { FormDataType } from '~types/types.ts';
import styles from './styles.module.css';

export function UseStateForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '' });

  console.log('Use state form render');

  return (
    <>
      <h2 className={styles.h2}>UseState Form</h2>
      <form
        className={styles.form}
        onSubmit={(event) => {
          event.preventDefault();
          if (!validateSubmit(name, email)) {
            return;
          }
          setFormData({ name, email });
        }}
      >
        <label htmlFor={'nameUS'}>
          Your Name
          <input
            className={styles.input}
            id={'nameUS'}
            type={'text'}
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </label>
        <label htmlFor={'emailUS'}>
          Email Address
          <input
            className={styles.input}
            id={'emailUS'}
            type={'email'}
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <CurrentValue {...formData} />
    </>
  );
}

function CurrentValue({ name, email }: FormDataType) {
  return (
    <p>
      Текущее значение:
      <span className={styles.span}>
        {name} {email}
      </span>
    </p>
  );
}
